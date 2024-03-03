import {signIn} from 'next-auth/react'

export async function loginIn({
    redirectPath,
    provider,
}: {
    redirectPath: string
    provider: string
}) {
    const result = await signIn(provider, {
        callbackUrl: redirectPath,
    })
}
