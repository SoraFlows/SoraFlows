// 多语言 Locale Dictionary
export interface LocaleDictionary {
    dictionary: HomePage
}

interface HomePage {
    homepage: HomePageDictionary
}

interface HomePageDictionary {
    introduce: string,
    introduce_2: string,
    email_lint: string,
    submit: string
}