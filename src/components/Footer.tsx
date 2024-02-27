import React from 'react'
import Link from 'next/link';
import { useTranslations } from 'next-intl'
import { languages } from '@/i18n';


export default function Footer({ year, companyName, intl }) {
    // 获取路由的语言
    
    const t = useTranslations('footer');
    const legal = useTranslations('legal');
    console.log(legal)
    return (
        <footer
            className="flex flex-col items-center justify-start text-center mt-auto p-4 bg-gray-50 text-gray-800 w-full gap-5">
            {/* 国际化路由展示 */}
            <div className="flex flex-col sm:flex-row justify-center items-center w-full mb-5">
                {languages.map(({ lang, language }) => (
                    <Link href={`/${lang}`} key={lang} lang={lang} className="px-2 py-1 hover:text-gray-500 text-center">
                        {language}
                    </Link>
                ))}
            </div>
            {/* 插入Google统计脚本*/}
            {/* <!-- Google tag (gtag.js) --> */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-CCB2RC3FFG"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QYDXN91667');
        `
                }}
            /> */}
            {/* 插入百度统计脚本 */}
            {/* <script dangerouslySetInnerHTML={{
                __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?383e2ed78880f6ea2a404e57d45be7b2";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `
            }} /> */}

            <div className={`flex flex-row justify-around w-full`}>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        SoraFlows
                    </p>
                    <div>
                        {intl.subtitle}
                    </div>
                </div>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        {intl.introduce}
                    </p>
                    <a href={'/'} className={`hover:text-gray-500`} target='_blank'>
                        {'What\'s Sora'}
                    </a>
                </div>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        {intl.site}
                    </p>
                    <a href={'https://openai.com/'} className={`hover:text-gray-500`} target='_blank'>
                        OpenAI
                    </a>
                </div>
                <div className={`flex flex-col items-start gap-4`}>
                    <p className={`text-xl font-bold`}>
                        {legal('legal')}
                    </p>
                    <a href={`/privacy-policy`} 
                        className={`hover:text-gray-500`}>
                        {legal('privacyPolicy')}
                    </a>
                    <a href={`/terms-of-service`} className={`hover:text-gray-500`} target='_blank'>
                    {legal('termsOfService')}
                    </a>
                </div>
            </div>

            <div>
            &copy; Copyright 2023-{year}. <a href={`/`} className={`text-indigo-400 hover:text-indigo-300`}>{companyName}</a> All rights reserved.
            </div>



        </footer>
    )
}