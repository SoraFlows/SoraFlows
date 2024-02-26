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
        lang: 'en-US',
        language: 'English'
    },
    {
        lang: 'zh-CN',
        language: '简体中文'
    },
    {
        lang: 'zh-TW',
        language: '繁體中文'
    },
    {
        lang: 'ja-JP',
        language: '日本語'
    },
    {
        lang: 'ar-SA',
        language: 'العربية'
    },
    {
        lang: 'ko-KR',
        language: '한국어'
    },
    {
        lang: 'pt-BR',
        language: 'Português (Brasil)'
    },
    {
        lang: 'es-ES',
        language: 'Español'
    },
    {
        lang: 'de-DE',
        language: 'Deutsch'
    },
    {
        lang: 'fr-FR',
        language: 'Français'
    },
    {
        lang: 'vi-VN',
        language: 'Tiếng Việt'
    }
]

export const locales = languages.map((item) => item.lang)

export type Locale = typeof locales[number];

