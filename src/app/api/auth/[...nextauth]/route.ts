import NextAuth, {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import {upsertUser} from '@/api/user/upsertUser'

const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    debug: false,
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            console.log(user)
            await upsertUser(
                <string>user.name,
                <string>user.email,
                <string>user.image,
            )
            return true
        },
        async redirect({url, baseUrl}) {
            if (url.startsWith('/')) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    secret: process.env.NEXT_AUTH_SECRET || 'secret',
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
