export const i18n = {
    defaultLocale: "en-US",
    locales: [
        "en-US", "zh-CN", "zh-TW", "ja-JP", "ar-SA", "ko-KR",
        "pt-BR", "es-ES", "de-DE", "fr-FR",  "vi-VN",
        // "ru-RU", "ar-SA", "hi-IN", "bn-BD", "pl-PL", 
        // "tr-TR", "nl-NL", "sv-SE", "da-DK", "fi-FI", 
        // "no-NO", "hu-HU", "cs-CZ", "sk-SK", "ro-RO", 
        // "el-GR", "th-TH",  "id-ID", "ms-MY",
        // 可根据需要继续添加更多语言
    ],
} as const;


export const languages = [
    {
        lang: "en-US",
        language: "English",
    },
    {
        lang: "zh-CN",
        language: "简体中文",
    },
    {
        lang: "zh-TW",
        language: "繁體中文",
    },
    {
        lang: "ja-JP",
        language: "日本語",
    },
    {
        lang: "ar-SA",
        language: "العربية",
    },
    {
        lang: "ko-KR",
        language: "한국어",
    },
    {
        lang: "pt-BR",
        language: "Português (Brasil)",
    },
    {
        lang: "es-ES",
        language: "Español",
    },
    {
        lang: "de-DE",
        language: "Deutsch",
    },
    {
        lang: "fr-FR",
        language: "Français",
    },
    {
        lang: "vi-VN",
        language: "Tiếng Việt",
    },
    // 更多语言根据需要添加
]


// metadata for each language
export const translations: Translations = {
    'en-US': {
        title: "SoraFlows - Advanced Video Editing and Generation Tool with OpenAI",
        description: "SoraFlows is an open-source WebUi platform for users to easily create Advanced Video with OpenAI's Sora model.",
    },
    'zh-CN': {
        title: "SoraFlows - OpenAI 高级视频编辑与生成工具",
        description: "SoraFlows 是一个开源的 WebUi 平台，用户可以轻松地使用 OpenAI 的 Sora 模型创建高级视频。",
    },
    'zh-TW': {
        title: "SoraFlows - OpenAI 高級視頻編輯與生成工具",
        description: "SoraFlows 是一個開源的 WebUi 平台，用戶可以輕鬆地使用 OpenAI 的 Sora 模型創建高級視頻。",
    },
    'ja-JP': {
        title: "SoraFlows - OpenAIを使用した高度なビデオ編集・生成ツール",
        description: "SoraFlowsは、OpenAIのSoraモデルを使用して高度なビデオを簡単に作成できるオープンソースのWebUiプラットフォームです。",
    },
    "ar-SA": {
        title: "SoraFlows - أداة تحرير وإنتاج الفيديو المتقدمة مع OpenAI",
        description: "SoraFlows هي منصة ويب UI مفتوحة المصدر تتيح للمستخدمين بسهولة إنشاء فيديوهات متقدمة باستخدام نموذج Sora من OpenAI.",
    },
    'ko-KR': {
        title: "SoraFlows - OpenAI와 함께하는 고급 비디오 편집 및 생성 도구",
        description: "SoraFlows는 사용자가 OpenAI의 Sora 모델을 사용하여 고급 비디오를 쉽게 만들 수 있는 오픈소스 WebUi 플랫폼입니다.",
    },
    'pt-BR': {
        title: "SoraFlows - Ferramenta avançada de edição e geração de vídeo com OpenAI",
        description: "SoraFlows é uma plataforma WebUi de código aberto para que os usuários possam criar vídeos avançados facilmente com o modelo Sora de OpenAI.",
    },
    'es-ES': {
        title: "SoraFlows - Herramienta de edición y generación de vídeo avanzado con OpenAI",
        description: "SoraFlows es una plataforma WebUi de código abierto para que los usuarios puedan crear vídeos avanzados fácilmente con el modelo Sora de OpenAI.",
    },
    'de-DE': {
        title: "SoraFlows - Fortgeschrittenes Videobearbeitungs- und Erstellungstool mit OpenAI",
        description: "SoraFlows ist eine Open-Source-WebUi-Plattform, mit der Benutzer mithilfe des Sora-Modells von OpenAI fortgeschrittene Videos einfach erstellen können.",
    },
    // 添加更多语言的元数据
    'fr-FR': {
        title: "SoraFlows - Outil d'édition et de création vidéo avancé avec OpenAI",
        description: "SoraFlows est une plateforme WebUi open-source permettant aux utilisateurs de créer facilement des vidéos avancées avec le modèle Sora d'OpenAI.",
    },
    'vi-VN': {
        title: "SoraFlows - Công cụ chỉnh sửa và tạo video nâng cao với OpenAI",
        description: "SoraFlows là một công cụ WebUi mã nguồn mở giúp người dùng tạo video nâng cao dễ dàng bằng mô hình Sora của OpenAI.",
    },
    // 等等，根据前面给出的语言列表继续补充
};


export const locales = [
    "en-US", "zh-CN", "zh-TW", "ja-JP", "ar-SA", "ko-KR",  
    "pt-BR", "es-ES", "de-DE", "fr-FR",  "vi-VN",
    // "ru-RU", "ar-SA", "hi-IN", "bn-BD", "pl-PL", 
    // "tr-TR", "nl-NL", "sv-SE", "da-DK", "fi-FI", 
    // "no-NO", "hu-HU", "cs-CZ", "sk-SK", "ro-RO", 
    // "el-GR", "th-TH",  "id-ID", "ms-MY",
    // 可根据需要继续添加更多语言
] as const;

export type Locale = typeof locales[number];
