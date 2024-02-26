import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) {
        notFound()
    }

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    }
})

export const languages = [
    {
        lang: 'en',
        language: 'English'
    },
    {
        lang: 'zh',
        language: '简体中文'
    },
    {
        lang: 'zh-TW',
        language: '繁體中文'
    },
    {
        lang: 'ja',
        language: '日本語'
    },
    {
        lang: 'ar',
        language: 'العربية'
    },
    {
        lang: 'ko',
        language: '한국어'
    },
    {
        lang: 'pt',
        language: 'Português (Brasil)'
    },
    {
        lang: 'es',
        language: 'Español'
    },
    {
        lang: 'de',
        language: 'Deutsch'
    },
    {
        lang: 'fr',
        language: 'Français'
    },
    {
        lang: 'vi',
        language: 'Tiếng Việt'
    }
]

export const locales = languages.map((item) => item.lang)

export type Locale = typeof locales[number];

