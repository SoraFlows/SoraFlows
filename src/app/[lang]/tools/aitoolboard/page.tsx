// import sites from '@/data/aitools.json'; // 根据实际路径调整导入路径
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import type { Metadata } from 'next'
import sites from "@/data/aitools.json";
import GetDictLang from "@/lib/getdictlang"; // Import the getRequestConfig function from the i18n module
import { Locale } from '@/i18n';
import Footer from "@/components/Footer";
import { getTranslations } from 'next-intl/server'
import { LayoutHeader } from '@/components/Header';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }){
    // 使用i18next获取翻译文本
    const data = await GetDictLang(lang); 
    console.log(data);
    console.log(data.aitoolboard.title);
    return {
        title: data.aitoolboard.title,
        description: data.aitoolboard.description,
        icons: {
            icon: '/favicon.ico',
            shortcut: '/shortcut-icon.png',
            apple: '/apple-icon.png',
            other: {
              rel: 'apple-touch-icon-precomposed',
              url: '/apple-touch-icon-precomposed.png',
            },
          },
    }
}


export default function AiToolBoard({ params: { lang } }: { params: { lang: Locale } }) {
    const t = useTranslations('aitoolboard');

    // 处理URL，移除协议部分
    const getFaviconUrl = (url) => {
        const hostname = new URL(url).hostname; // 获取域名
        return `https://api.iowen.cn/favicon/${hostname}.png`; // 返回处理后的API URL
    };
    // const tFooter = await getTranslations('footer')

    // const footerIntlText = {
    //     subtitle: tFooter('subtitle'),
    //     introduce: tFooter('introduce'),
    //     site: tFooter('site')
    // }
    // const getFaviconUrl = (url) => {
    //         const hostname = new URL(url).hostname; // 获取域名
    //         return `http://inadequate-turquoise-macaw.faviconkit.com/${hostname}/64`; // 返回处理后的API URL
    //     };
    
    // const getFaviconUrl = (url) => {
    //     const hostname = new URL(url).hostname; // 获取域名
    //     console.log(hostname);
    //     return `https://www.favicon.vip/get.php?url=${hostname}`; // 返回处理后的API URL
    // }
        
    return (
        <>
            {/* <Head>
                <title>AiTools Directory</title>
                <meta property="og:title" content="AiTools Directory" key="title" />
                <meta name="description" content="Discover AI tools" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            {/* <Head>

                <title>{t('title')}</title>
                <meta name="description" content={t('description')} />
                <link rel="icon" href="/logo.png" type="image/png"/>
            </Head> */}
            <LayoutHeader lang={lang}/>
            <div className='flex flex-col p-4'>
            <h1 className="text-2xl font-bold mb-4 text-center">{t('h1')}</h1>
            <p> {t('pDescription')} </p>
            </div>
            <div className="p-4">
                    <div className="flex flex-wrap -mx-2">
                        {sites.map((site, index) => (
                            <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <div className="border border-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center">
                                    <img
                                        // loading="lazy"
                                        src={site.icon || getFaviconUrl(site.href)}
                                        alt={`${site.title} logo`}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 mb-4"
                                         // 如果你遇到跨域问题或使用外部URL，可能需要这个属性
                                    />
                                    <a 
                                    href={site.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-lg font-semibold hover:underline hover:text-blue-500 text-center">
                                        {site.title}
                                    </a>
                                    {/* {site.is_alive !== undefined && <span className="text-xs text-gray-500">{site.is_alive ? "✅" : "❌"}</span>} */}
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            {/* <Footer year={new Date().getFullYear()} companyName="SoraFlows" intl={footerIntlText} /> */}
        </>

    );
}

// AiToolBoard.getLayout = HeaderLayout.getLayout; // 动态设置布局