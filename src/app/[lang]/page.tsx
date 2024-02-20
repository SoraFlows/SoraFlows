'use server'
import  MainContent from '@/components/MainContent'
import {LayoutHeader} from '@/components/Header'
import VideoCarousel from '@/components/VideoCarousel'
import Footer from '@/components/Footer'
import {getDictionary} from './dictionaries'
import {Locale} from '@/i18n-config'
import {translations} from "@/config/translations";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang) // en

    // const params = useSearchParams();
    // console.log(params.get('lang'))
    const videos = [
        'https://cdn.openai.com/sora/videos/gold-rush.mp4',
        'https://cdn.openai.com/sora/videos/zen-garden-gnome.mp4',
        'https://cdn.openai.com/tmp/s/sampling_4.mp4',
        'https://cdn.openai.com/tmp/s/an-adorable-kangaroo-wearing-purple-overalls-and-cowboy-boots-taking-a-pleasant-stroll-in-Johannesburg-South-Africa-during-a-winter-storm.mp4',
        'https://cdn.openai.com/tmp/s/prompting_7.mp4',
        'https://cdn.openai.com/tmp/s/bike_1.mp4'
    ]
    const metadata = translations[lang || 'zh-CN'];
    return (
        <>
            <header>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/logo.png"></link>
            </header>
            <main
                className="flex flex-col min-h-screen py-auto flex-col items-center justify-center  bg-home-background bg-cover">

                <LayoutHeader/>
                <div className="flex flex-row items-center w-full top-[10%] left-[15%]">
                    <MainContent dictionary={dictionary}/>
                </div>
                <div
                    className="md:absolute md:w-1/2 md:left-[70%] top-[50%] transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <VideoCarousel videos={videos}/>
                </div>
                <Footer year={new Date().getFullYear()} companyName="SoraFlows"/>
            </main>
        </>
    )
}
