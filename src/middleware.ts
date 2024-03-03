import createMiddleware from 'next-intl/middleware'
import {defaultLocale, localePrefix} from '@/config'
import {locales} from '@/i18n'

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    localeDetection: false,
})

export const config = {
    matcher: [
        '/',
        '/(en|zh|zh-TW|ja|ar|ko|pt|es|de|fr|vi)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
}
