import 'server-only'

const dictionaries = {
    'en-US': () => import('@/app/[lang]/(dictionaries)/en.json').then((module) => module.default),
    'zh-CN': () => import('@/app/[lang]/(dictionaries)/zh.json').then((module) => module.default),
    'zh-TW': () => import('@/app/[lang]/(dictionaries)/zh-tw.json').then((module) => module.default),
    'ja-JP': () => import('@/app/[lang]/(dictionaries)/ja.json').then((module) => module.default),
    'ar-SA': () => import('@/app/[lang]/(dictionaries)/ar.json').then((module) => module.default),
    'ko-KR': () => import('@/app/[lang]/(dictionaries)/ko.json').then((module) => module.default),
    'pt-BR': () => import('@/app/[lang]/(dictionaries)/pt-br.json').then((module) => module.default),
    'es-ES': () => import('@/app/[lang]/(dictionaries)/es.json').then((module) => module.default),
    'de-DE': () => import('@/app/[lang]/(dictionaries)/de.json').then((module) => module.default),
    'fr-FR': () => import('@/app/[lang]/(dictionaries)/fr.json').then((module) => module.default),
    'vi-VN': () => import('@/app/[lang]/(dictionaries)/vi.json').then((module) => module.default),
    
    // 'it-IT': () => import('@/app/[lang]/(dictionaries)/it.json').then((module) => module.default),
    // 'pt-PT': () => import('@/app/[lang]/(dictionaries)/pt.json').then((module) => module.default),
    // 'ru-RU': () => import('@/app/[lang]/(dictionaries)/ru.json').then((module) => module.default),
    // 'ar-SA': () => import('@/app/[lang]/(dictionaries)/ar.json').then((module) => module.default),
    // 'hi-IN': () => import('@/app/[lang]/(dictionaries)/hi.json').then((module) => module.default),
    // 'bn-BD': () => import('@/app/[lang]/(dictionaries)/bn.json').then((module) => module.default),
    // 'pl-PL': () => import('@/app/[lang]/(dictionaries)/pl.json').then((module) => module.default),
    // 'tr-TR': () => import('@/app/[lang]/(dictionaries)/tr.json').then((module) => module.default),
    // 'nl-NL': () => import('@/app/[lang]/(dictionaries)/nl.json').then((module) => module.default),
    // 'sv-SE': () => import('@/app/[lang]/(dictionaries)/sv.json').then((module) => module.default),
    // 'da-DK': () => import('@/app/[lang]/(dictionaries)/da.json').then((module) => module.default),
    // 'fi-FI': () => import('@/app/[lang]/(dictionaries)/fi.json').then((module) => module.default),
    // 'no-NO': () => import('@/app/[lang]/(dictionaries)/no.json').then((module) => module.default),
    // 'hu-HU': () => import('@/app/[lang]/(dictionaries)/hu.json').then((module) => module.default),
    // 'cs-CZ': () => import('@/app/[lang]/(dictionaries)/cs.json').then((module) => module.default),
    // 'sk-SK': () => import('@/app/[lang]/(dictionaries)/sk.json').then((module) => module.default),
    // 'ro-RO': () => import('@/app/[lang]/(dictionaries)/ro.json').then((module) => module.default),
    // 'el-GR': () => import('@/app/[lang]/(dictionaries)/el.json').then((module) => module.default),
    // 'th-TH': () => import('@/app/[lang]/(dictionaries)/th.json').then((module) => module.default),
    // 'id-ID': () => import('@/app/[lang]/(dictionaries)/id.json').then((module) => module.default),
    // 'ms-MY': () => import('@/app/[lang]/(dictionaries)/ms.json').then((module) => module.default),
    // 根据需要继续添加其他语言
};


export const getDictionary = async (locale) => {
    return dictionaries[locale]()
}