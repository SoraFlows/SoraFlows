'use client'
import {LayoutHeader} from '@/components/Header'
import VideoDisplay from '@/components/VideoDisplay'
import {MdOutlineAttachFile} from 'react-icons/md'
import React, {useRef, useState} from 'react'
import {Locale} from '@/i18n'
import {useCommonContext} from '@/context/common-context'
import {IoMdSend} from 'react-icons/io'

// This page only renders when the app is built statically (output: 'export')
export default function Studio({params: {lang}}: {params: {lang: Locale}}) {
    const [prompt, setPrompt] = useState('')
    const [videoList, setVideoList] = useState<{url: string; prompt: string}[]>(
        [],
    ) // Set videoUrl as state
    const {setShowGeneratingModal} = useCommonContext()
    const videoListRef = useRef<HTMLDivElement>(null)

    const handleSetVideo = async () => {
        const formData = {
            model: 'sora',
            prompt: `${prompt}`,
            size: '1024x1024',
            quality: 'high',
            duration: '3s',
            aspect_ratio: '16:9',
            fps: 30,
            n: 1,
        }

        setShowGeneratingModal(true)
        const response = await fetch('/v1/video/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bear *****',
            },
            body: JSON.stringify(formData),
        })

        const data = await response.json() // 假设返回的是JSON数据
        // console.log(data)
        setVideoList([
            ...videoList,
            {
                url: data.data[0].url,
                prompt: data.data[0].revised_prompt,
            },
        ])
        setShowGeneratingModal(false)
        setTimeout(() => {
            if (videoListRef.current) {
                videoListRef.current.scrollTop =
                    videoListRef.current.scrollHeight
            }
        }, 100) // 100毫秒的延迟
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSetVideo().then()
        }
    }
    return (
        <>
            <div className='h-screen bg-white/80 p-4'>
                <LayoutHeader
                    page={'studio'}
                    lang={lang}
                />
                <div
                    className={`max-h-[70vh] overflow-scroll`}
                    ref={videoListRef}>
                    {videoList.map((item) => {
                        return (
                            <VideoDisplay
                                key={item.url}
                                videoUrl={item.url}
                                prompt={item.prompt}
                            />
                        )
                    })}
                </div>
                <div className='absolute bottom-[2vh] left-[50%] flex -translate-x-1/2 items-center rounded-full border border-gray-400 bg-gray-100 px-3 py-2'>
                    <button className='scale-150 hover:opacity-75'>
                        <MdOutlineAttachFile />
                    </button>
                    <input
                        id='prompt-input'
                        className='rounded-4xl relative mx-4 h-8 min-w-[30vh] resize-none bg-gray-100 p-2 outline-0 md:min-w-[70vh]'
                        placeholder='Describe your magic'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={handleKeyPress}></input>
                    <button
                        onClick={handleSetVideo}
                        className='-right-0 scale-125 rounded-full bg-gray-300 p-2 hover:opacity-75'>
                        <IoMdSend />
                    </button>
                </div>
            </div>
        </>
    )
}
