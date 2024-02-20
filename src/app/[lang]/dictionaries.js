import 'server-only'

const dictionaries = {
    'en-US': () => import('@/app/[lang]/(dictionaries)/en.json').then((module) => module.default),
    'zh-CN': () => import('@/app/[lang]/(dictionaries)/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
    return dictionaries[locale]()
}