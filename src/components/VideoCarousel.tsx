'use client'
import React, { useState } from 'react';

// @ts-ignore
const VideoCarousel = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isFirstVideo = currentIndex === 0;
        const newIndex = isFirstVideo ? videos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isLastVideo = currentIndex === videos.length - 1;
        const newIndex = isLastVideo ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="flex items-center justify-center">
            <button onClick={(e) => goToPrevious(e)} className="mx-4 p-4 icon-[mingcute--arrow-left-fill]">
                {/*<div className='text-4xl p-4'>*/}
                {/*    Prev*/}
                {/*</div>*/}
            </button>
            <div className="relative w-full min-w-2xl max-w-2xl mx-auto">
                <div>
                <video key={videos[currentIndex]} controls preload='metadata' className=" top-0 left-0 h-full w-full">
                    <source src={videos[currentIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>   
            <button onClick={(e) => goToNext(e)} className="mx-4 p-4 icon-[mingcute--arrow-right-fill]">
                {/*<div className='text-4xl'>*/}
                {/*    Next*/}
                {/*</div>*/}
            </button>
        </div>
    );
};

export default VideoCarousel;
