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
        'https://cdn.openai.com/sora/videos/zen-garden-gnome.mp4'
    ];
    return (
        <main
            className="flex min-h-screen py-auto flex-col items-center justify-center p-24 bg-home-background bg-cover">
            {/*{dictionary["homepage"]["introduce"]}*/}
            <LayoutHeader/>
            <div className='flex flex-row justify-around w-full'>
                <MainContent dictionary={dictionary}/>
                <VideoCarousel videos={videos}/>
            </div>
            <Footer year={new Date().getFullYear()} companyName="SoraFlows"/>
        </main>
    )
}