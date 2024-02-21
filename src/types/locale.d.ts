// 多语言 Locale Dictionary
export interface LocaleDictionary {
    dictionary: Dictionary
}

interface Dictionary {
    homepage: HomePageDictionary
    attention: AttentionDictionary
}

// 首页部分的翻译
interface HomePageDictionary {
    introduce: string,
    introduce_2: string,
    email_lint: string,
    submit: string
}

// 注意（提示）部分的翻译
interface AttentionDictionary {
    input_email: string
}
