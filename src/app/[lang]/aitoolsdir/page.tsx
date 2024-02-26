import React from "react";
import sites from '@/data/aitools.json'; // 根据实际路径调整导入路径
import Image from 'next/image';
import { Metadata } from 'next'
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
    title: 'My Page Title',
    description: 'This is my page description',
}

// This page only renders when the app is built statically (output: 'export')
export default function AiToolsDir() {

    // 处理URL，移除协议部分
    const getFaviconUrl = (url) => {
        const hostname = new URL(url).hostname; // 获取域名
        return `https://api.iowen.cn/favicon/${hostname}.png`; // 返回处理后的API URL
    };

    return (
        <>
            {/* <Head>
                <title>AiTools Directory</title>
                <meta property="og:title" content="AiTools Directory" key="title" />
                <meta name="description" content="Discover AI tools" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">AI 导航站</h1>
                <div className="flex flex-wrap -mx-2">
                    {sites.map((site, index) => (
                        <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="border border-gray-200 shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
                                <ImageWithFallback
                                    src={getFaviconUrl(site.href)}
                                    fallbackSrc="/logo.png"
                                    alt={`${site.title} logo`}
                                    width="64" // 根据需要调整
                                    height="64" // 根据需要调整
                                    className="w-16 h-16 mb-4" // 适用于你的样式
                                />
                                <a href={site.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline text-center">
                                    {site.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}
