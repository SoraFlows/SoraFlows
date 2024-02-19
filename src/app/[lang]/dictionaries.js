import 'server-only'

const dictionaries = {
    'en-US': () => import('./dictionaries/en.json').then((module) => module.default),
    'zh-CN': () => import('./dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()