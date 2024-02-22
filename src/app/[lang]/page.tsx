'use server'
import MainContent from '@/components/MainContent'
import { LayoutHeader } from '@/components/Header'
import VideoCarousel from '@/components/VideoCarousel'
import Footer from '@/components/Footer'
import { getDictionary } from './dictionaries'
import { translations } from '@/i18n-config'
import { allExampleVideoList } from '@/app/data/openaiExampleVideo'
import { Locale } from '@/i18n-config'
import { shuffleArray } from '@/lib/shuffle'
import { LocaleDictionary } from '@/types/locale'
import Link from 'next/link'
import { IoIosMore } from 'react-icons/io'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang) // en
    const videos = allExampleVideoList
    shuffleArray(videos)
    const randomTenVideos = videos.slice(0, 10)
    const metadata = translations[lang || 'zh-CN']
    return (
        <>
            <header>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/logo.png"></link>
            </header>
            <main
                className="flex min-h-screen py-auto flex-col items-center justify-center p-4 bg-home-background bg-cover space-y-3 bg-center">
                <LayoutHeader />
                <div className="top-[10%] left-[15%]">
                    <MainContent dictionary={dictionary} />
                </div>
                {/*<div*/}
                {/*    className="md:w-1/2 md:left-[70%] top-[50%] transform md:-translate-x-1/2 md:-translate-y-1/2">*/}
                <div className="bg-white rounded-2xl border-[14px] border-b-blue-300 p-16 flex flex-col items-center">
                    <span
                        className="col-span-3 text-xl md:text-2xl font-bold text-gray-600">{dictionary.homepage.demo_title} </span>
                    <div
                        className="mb-8 gap-7 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
                        {randomTenVideos.map((item) => {
                            return (
                                <div key={item.number} className="p-2 break-inside-avoid">
                                    <VideoCarousel videos={item} />
                                </div>
                            )
                        })}
                    </div>
                    <Link className={`text-3xl flex flex-row justify-center items-center gap-4 text-indigo-400 hover:text-indigo-600 transition duration-200 hover:scale-105 transform-gpu`}
                          href={`/video-showcase`}>
                        {dictionary.homepage.more_video} {'>>>'}
                    </Link>
                </div>
                <Footer year={new Date().getFullYear()} companyName="SoraFlows" dictionary={dictionary}/>
            </main>
        </>
    )
}
