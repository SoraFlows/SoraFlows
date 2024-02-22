import React from 'react'
import { Dictionary } from '@/types/locale'

// 定义Props类型
interface FooterProps {
    year: number;
    companyName: string;
    dictionary: Dictionary;
}

export default function Footer({ year, companyName, dictionary }: FooterProps) {
    // 定义Props类型，如果需要的话
    return (
        <footer
            className="flex flex-col items-center justify-start text-center mt-auto p-5 bg-gray-50 text-gray-800 w-full h-[20vh]">
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


        </footer>
    )
}