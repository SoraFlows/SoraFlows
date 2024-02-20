'use server'
import {LayoutHeader} from "@/app/[lang]/Header";
import MainContent from "@/app/[lang]/MainContent";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/app/[lang]/Footer";
import { getDictionary } from './dictionaries'
import {Locale} from "@/i18n-config";
export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
    const dictionary = await getDictionary(lang) // en
    const videos = [
        'https://cdn.openai.com/sora/videos/gold-rush.mp4',
        'https://cdn.openai.com/sora/videos/zen-garden-gnome.mp4',
        'https://cdn.openai.com/tmp/s/sampling_4.mp4',
        'https://cdn.openai.com/tmp/s/an-adorable-kangaroo-wearing-purple-overalls-and-cowboy-boots-taking-a-pleasant-stroll-in-Johannesburg-South-Africa-during-a-winter-storm.mp4',
        'https://cdn.openai.com/tmp/s/prompting_7.mp4',
        'https://cdn.openai.com/tmp/s/bike_1.mp4'
    ];
    return (
        <main
            className="flex min-h-screen py-auto flex-col items-center justify-center p-24 bg-home-background bg-cover">
            <LayoutHeader/>
            <div className='absolute top-[10%] left-[15%]'>
                <MainContent dictionary={dictionary}/>
            </div>
            <div className='absolute w-1/2 left-[70%] top-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                <VideoCarousel videos={videos}/>
            </div>
            <Footer year={new Date().getFullYear()} companyName="SoraFlows"/>
        </main>
    )
}