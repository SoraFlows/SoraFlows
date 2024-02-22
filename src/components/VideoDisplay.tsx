import { FaStarOfDavid } from 'react-icons/fa'
import { AiFillFileImage } from 'react-icons/ai'
import { MdOutlineAttachFile } from 'react-icons/md'
import React, {useEffect, useRef} from 'react'
import { allExampleVideoList } from '@/app/data/openaiExampleVideo'
import { IoCopy } from 'react-icons/io5'

export default function VideoDisplay({videoUrl, prompt}) {
    // const allExampleVideos = allExampleVideoList
    // console.log('当前视频url', videoUrl)
    // console.log('当前视频prompt', prompt)
    return (
        <>
            <div className="flex h-screen flex-col items-center">
                <div className="pt-6 max-h-[80vh] max-w-[80vh]">
                    <div className="bg-gray-200 rounded-xl px-16">
                        <video
                            key={videoUrl}
                            controls
                            preload="metadata"
                            className="top-0 left-0 h-full w-full"
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="flex ">
                        <div className="text-white py-2">
                            <button className='hover:opacity-75'>
                                <IoCopy className="text-gray-600 scale-125" />
                            </button>
                            <span className='pl-4 text-black'>
                                {prompt}
                            {/*{allExampleVideos[0].prompt}*/}
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}