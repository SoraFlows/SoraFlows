export const i18n = {
    defaultLocale: "en-US",
    locales: ["en-US", "zh-CN"],
} as const;

export const languages = [
    {
        lang: "en-US",
        language: "English",
    },
    {
        lang: "zh-CN",
        language: "简体中文",
    }
]

// metadata for each language
export const translations: Translations = {
    'en-US': {
        title: "SoraFlows - Advanced Video Editing and Generation Tool Powered by OpenAI",
        description: "Discover SoraFlows, the leading video generation tool developed with OpenAI technology, capable of creating high-quality videos from novels, images, and text prompts. Explore our graphical/node interface to revolutionize video editing.",
    },
    'zh-CN': {
        title: "SoraFlows - 基于OpenAI的先进视频编辑与生成工具",
        description: "SoraFlows是基于OpenAI开发的领先视频生成工具，能从小说、图片、文字提示中创造高质量视频。探索我们的图形/节点界面，开启视频编辑新纪元。",
    },
};
export const locales = ['en-US', 'zh-CN'] as const;

export type Locale = typeof locales[number];
