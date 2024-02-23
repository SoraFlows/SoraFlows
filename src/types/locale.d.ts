// 多语言 Locale Dictionary
export interface LocaleDictionary {
    dictionary: Dictionary
}

interface Dictionary {
    homepage: HomePageDictionary
    
    attention: AttentionDictionary
    footer: FooterDictionary
}

// 首页部分的翻译
interface HomePageDictionary {
    introduce: string,
    introduce_2: string,
    email_lint: string,
    submit: string,
    demo_title: string,
    more_video: string
    pDescription: string
}

// 注意（提示）部分的翻译
interface AttentionDictionary {
    input_email: string
}

// 注意（提示）部分的翻译
interface FooterDictionary {
    subtitle: string
    site: string
    introduce: string
}
