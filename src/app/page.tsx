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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LayoutHeader/>
            <MainContent/>
            <VideoCarousel videos={videos}/>
            <Footer year={new Date().getFullYear()} companyName="SoraFlows" />
        </main>
    )
}