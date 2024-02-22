import React from 'react'
import { Dictionary } from '@/types/locale'
import Link from 'next/link'; // 使用Next.js的Link组件来处理路由跳转

// 定义Props类型
interface FooterProps {
    year: number;
    companyName: string;
    dictionary: Dictionary;
}
// 你提供的语言列表
const languages = [
    { lang: "en-US", language: "English" },
    { lang: "zh-CN", language: "简体中文" },
    { lang: "zh-TW", language: "繁體中文" },
    { lang: "ja-JP", language: "日本語" },
    { lang: "ko-KR", language: "한국어" },
    { lang: "pt-BR", language: "Português (Brasil)" },
    { lang: "es-ES", language: "Español" },
    { lang: "de-DE", language: "Deutsch" },
    { lang: "fr-FR", language: "Français" },
    { lang: "vi-VN", language: "Tiếng Việt" },
    // 更多语言根据需要添加
];

export default function Footer({ year, companyName, dictionary }: FooterProps) {
    
    // 定义Props类型，如果需要的话
    return (
        <footer
            className="flex flex-col items-center justify-start text-center mt-auto p-5 bg-gray-50 text-gray-800 w-full  gap-20">
            {/* 国际化路由展示 */}
            <div className="flex flex-col sm:flex-row justify-center items-center w-full mb-5">
                {languages.map(({ lang, language }) => (
                    <Link href={`/${lang}`} key={lang} locale={lang} className="px-2 py-1 hover:text-gray-500 text-center">
                        {language}
                    </Link>
                ))}
            </div>
            {/* 插入Google统计脚本*/}
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-CCB2RC3FFG"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QYDXN91667');
        `
                }}
            />
            {/* 插入百度统计脚本 */}
            <script dangerouslySetInnerHTML={{
                __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?383e2ed78880f6ea2a404e57d45be7b2";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `
            }} />

            <div className={`flex flex-row justify-around w-full`}>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        SoraFlows
                    </p>
                    <div>
                        {dictionary.footer.subtitle}
                    </div>
                </div>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        {dictionary.footer.introduce}
                    </p>
                    <a href={'/'} className={`hover:text-gray-500`} target='_blank'>
                        {'What\'s Sora'}
                    </a>
                </div>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        {dictionary.footer.site}
                    </p>
                    <a href={'https://openai.com/'} className={`hover:text-gray-500`} target='_blank'>
                        OpenAI
                    </a>
                </div>
            </div>

            <div>
                © Copyright 2023-{year}. <a href={`/`} className={`text-indigo-400 hover:text-indigo-300`}>SoraFlows</a> All rights reserved.
            </div>


        </footer>
    )
}