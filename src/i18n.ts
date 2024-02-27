import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'


export const languages = [
    {
        lang: 'en',
        code: "en-US",
        language: 'English'
    },
    {
        lang: 'zh',
        code: "zh-CN",
        language: '简体中文'
    },
    {
        lang: 'zh-TW',
        code: "zh-TW",
        language: '繁體中文'
    },
    {
        lang: 'ja',
        code: "ja-JP",
        language: '日本語'
    },
    {
        lang: 'ar',
        code: "ar-SA",
        language: 'العربية'
    },
    {
        lang: 'ko',
        code: "ko-KR",
        language: '한국어'
    },
    {
        lang: 'pt',
        code: "pt-BR",
        language: 'Português (Brasil)'
    },
    {
        lang: 'es',
        code: "es-ES",
        language: 'Español'
    },
    {
        lang: 'de',
        code: "de-DE",
        language: 'Deutsch'
    },
    {
        lang: 'fr',
        code: "fr-FR",
        language: 'Français'
    },
    {
        lang: 'vi',
        code: "vi-VN",
        language: 'Tiếng Việt'
    }
]

export const locales = languages.map((item) => item.lang)

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) {
        notFound()
    }

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    }
})


export type Locale = typeof locales[number];

