import createMiddleware from 'next-intl/middleware'
import { defaultLocale, localePrefix } from '@/config'
import { locales } from '@/i18n'

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix
})

export const config = {
    matcher: ['/',
        '/(en-US|zh-CN|zh-TW|ja-JP|ar-SA|ko-KR|pt-BR|es-ES|de-DE|fr-FR|vi-VN)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ]
}