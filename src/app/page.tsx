'use client'
import {LayoutHeader} from "@/app/Header";
import MainContent from "@/app/MainContent";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/app/Footer";

export default function Home() {
    const videos = [
        'https://cdn.openai.com/sora/videos/gold-rush.mp4',
        'https://cdn.openai.com/sora/videos/zen-garden-gnome.mp4'
    ];
    return (
        <main className="flex min-h-screen py-auto flex-col items-center justify-center p-24 bg-home-background bg-cover">
            <LayoutHeader/>
            <div className='flex flex-row justify-around w-full'>
                <MainContent/>
                <VideoCarousel videos={videos}/>
            </div>
            <Footer year={new Date().getFullYear()} companyName="SoraFlows"/>
        </main>
    )
}