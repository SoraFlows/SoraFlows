'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { RiOpenaiFill, RiOpenaiLine } from 'react-icons/ri'

// @ts-ignore
const VideoCarousel = ({ videos }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px'
    });

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-full min-w-2xl max-w-2xl mx-auto">
                <div
                    ref={ref}
                    className={`flex flex-col space-y-4 justify-center items-start border rounded-2xl shadow-2xl p-4 transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}>
                    {inView ? (
                        <>
                            <video
                                key={videos.videoUrl}
                                controls
                                preload="metadata"
                                className="top-0 left-0 h-full w-full"
                            >
                                <source src={videos.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* 维持<a>标签以使链接可访问 */}
                            <a className="text-4xl flex gap-2 flex-row justify-center items-center" href={videos.videoUrl} target="_blank" rel="noopener noreferrer">
                                <RiOpenaiFill /> <span className="text-xl">Sora</span>
                            </a>

                            <div><span className="text-gray-600 font-bold">{videos.prompt}</span></div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default VideoCarousel
