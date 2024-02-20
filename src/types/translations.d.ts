interface Translation {
    title: string;
    description: string;
}

interface Translations {
    [locale: string]: Translation;
}

const translations: Translations = {
    'en-US': {
        title: "SoraFlows",
        description: "Generate video from text",
    },
    'zh-CN': {
        title: "SoraFlows 中文",
        description: "从文本生成视频",
    },
};