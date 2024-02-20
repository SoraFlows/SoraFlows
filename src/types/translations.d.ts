interface Translation {
    title: string;
    description: string;
}

interface Translations {
    [locale: string]: Translation;
}