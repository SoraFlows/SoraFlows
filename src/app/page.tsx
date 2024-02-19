'use client'
import {LayoutHeader} from "@/app/Header";
import MainContent from "@/app/MainContent";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/app/Footer";

export default function Home() {
    const videos = [
        'https://cdn.openai.com/sora/videos/gold-rush.mp4',
        'https://cdn.openai.com/sora/videos/zen-garden-gnome.mp4',
        'https://cdn.openai.com/tmp/s/sampling_4.mp4',
        'https://cdn.openai.com/tmp/s/an-adorable-kangaroo-wearing-purple-overalls-and-cowboy-boots-taking-a-pleasant-stroll-in-Johannesburg-South-Africa-during-a-winter-storm.mp4',
        'https://cdn.openai.com/tmp/s/prompting_7.mp4',
        'https://cdn.openai.com/tmp/s/bike_1.mp4'


    ];
    return (
        <>
        <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-home-background bg-cover">
            <LayoutHeader/>
            <div className='flex flex-row justify-around w-full'>
                <MainContent/>
                <VideoCarousel videos={videos}/>
            </div>
        </main>
        <Footer year={new Date().getFullYear()} companyName="SoraFlows"/>
        </>
    )
}