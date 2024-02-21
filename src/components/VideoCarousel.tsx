'use client'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

// @ts-ignore
const VideoCarousel = ({ videos }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px'
    })
    // const [currentIndex, setCurrentIndex] = useState(0)
    //
    // const goToPrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //     const isFirstVideo = currentIndex === 0
    //     const newIndex = isFirstVideo ? videos.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }
    //
    // const goToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //     const isLastVideo = currentIndex === videos.length - 1
    //     const newIndex = isLastVideo ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }

    return (
        <div className="flex items-center justify-center">
            {/*<button onClick={(e) => goToPrevious(e)} className="mx-4 p-4 icon-[mingcute--arrow-left-fill]">*/}
            {/*</button>*/}
            <div className="relative w-full min-w-2xl max-w-2xl mx-auto">

                <div className="flex justify-center items-center flex-col">
                    <div
                        ref={ref}
                        className={`transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`}
                    >
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
                                <div><span className="text-gray-600 font-bold italic">{videos.prompt}</span></div>
                            </>
                        ) : null}
                    </div>

                </div>
            </div>
            {/*<button onClick={(e) => goToNext(e)} className="mx-4 p-4 icon-[mingcute--arrow-right-fill]">*/
            }
            {/*</button>*/
            }
        </div>
    )
}

export default VideoCarousel
