import './globals.css'
import React from 'react'
import {Inter} from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: "",
    description: "",
    icon: "/logo.png",
    openGraph: {
        type: "website",
        locale: "en",
        url: "",
        title: "",
        description: "",
        image: "",
    },
    images: [
        {
            url: ""
        }
    ]
}

export default function LocaleLayout({
                                         children,
                                         params: { lang }
                                     }: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={lang}>
            <head>
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
                    }} 
                />
            </head>
        <body suppressHydrationWarning={true} className={clsx(inter.className, '')}>{children}</body>
        </html>
    )
}