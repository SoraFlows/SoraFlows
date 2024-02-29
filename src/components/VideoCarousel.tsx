'use client'
import React, {useEffect, useRef, useState} from 'react'
import {useInView} from 'react-intersection-observer'
import {RiOpenaiFill, RiOpenaiLine} from 'react-icons/ri'

// @ts-ignore
const VideoCarousel = ({videos}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
    })

    return (
        <div className='flex items-center justify-center'>
            <div className='min-w-2xl relative mx-auto w-full max-w-2xl'>
                <div
                    ref={ref}
                    className={`flex flex-col items-start justify-center space-y-4 rounded-2xl border p-4 shadow-2xl transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}>
                    {inView ? (
                        <>
                            <video
                                key={videos.videoUrl}
                                controls
                                preload='metadata'
                                className='left-0 top-0 h-full w-full'>
                                <source
                                    src={videos.videoUrl}
                                    type='video/mp4'
                                />
                                Your browser does not support the video tag.
                            </video>
                            {/* 维持<a>标签以使链接可访问 */}
                            <a
                                className='flex flex-row items-center justify-center gap-2 text-4xl'
                                href={videos.videoUrl}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <RiOpenaiFill />{' '}
                                <span className='text-xl'>Sora</span>
                            </a>

                            <div>
                                <span className='font-bold text-gray-600'>
                                    {videos.prompt}
                                </span>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default VideoCarousel
