'use client'
import {LayoutHeader} from '@/components/Header'
import VideoDisplay from '@/components/VideoDisplay'
import {MdOutlineAttachFile} from "react-icons/md";
import {FaStarOfDavid} from "react-icons/fa";
import React, {useState} from "react";
import { Locale } from '@/i18n'

// This page only renders when the app is built statically (output: 'export')
export default function Studio({ params: { lang } }: { params: { lang: Locale } }) {
    // const [url, setUrl] = useState('');
    const [prompt, setPrompt] = useState('');
    const [showVideo, setShowVideo] = useState(false); // 新增一个状态来控制视频的显示
    const [videoPrompt, setVideoPrompt] = useState(''); // Set videoPrompt as state
    const [videoUrl, setVideoUrl] = useState(''); // Set videoUrl as state
    const handleSetVideo = async () => {
        const formData = {
            "model": "sora",
            "prompt": `${prompt}`,
            "size": "1024x1024",
            "quality": "high",
            "duration": "3s",
            "aspect_ratio": "16:9",
            "fps": 30,
            "n": 1
        };
        const response = await fetch('/v1/video/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bear *****'
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json(); // 假设返回的是JSON数据
        console.log(data)
        setVideoPrompt(data.data[0].revised_prompt)
        setVideoUrl(data.data[0].url)
        setShowVideo(true); // 显示视频
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSetVideo();
        }
    }
    return (
        <>
            <div className='bg-white/80 p-4 h-screen'>
                <LayoutHeader page={'studio'} lang={lang}/>
                {showVideo && <VideoDisplay videoUrl={videoUrl} prompt={videoPrompt}/>}
                <div
                    className="absolute border-black border-2 p-4 rounded-2xl bottom-[5vh] left-[50%] -translate-x-1/2 flex items-center bg-gray-200]">
                    <button className="scale-150 hover:opacity-75">
                        <MdOutlineAttachFile/>
                    </button>
                    <input id="prompt-input"
                           className="outline-0 relative resize-none p-2 mx-4 h-12 rounded min-w-[80vh] text-xl bg-gray-200"
                           placeholder="Describe your magic"
                           value={prompt}
                           onChange={(e) => setPrompt(e.target.value)}
                           onKeyDown={handleKeyPress}>
                    </input>
                    <button onClick={handleSetVideo}
                            className="-right-0 p-2 scale-125 rounded bg-gray-300 hover:opacity-75">
                        <FaStarOfDavid/>
                    </button>
                </div>
            </div>
        </>
    );
}
