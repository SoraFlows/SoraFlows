import {FaStarOfDavid} from 'react-icons/fa'
import {AiFillFileImage} from 'react-icons/ai'
import {MdOutlineAttachFile} from 'react-icons/md'
import React, {useEffect, useRef} from 'react'
import {allExampleVideoList} from '@/app/data/openaiExampleVideo'
import {IoCopy} from 'react-icons/io5'

export default function VideoDisplay({videoUrl, prompt}) {
    // const allExampleVideos = allExampleVideoList
    // console.log('当前视频url', videoUrl)
    // console.log('当前视频prompt', prompt)
    return (
        <>
            <div className='flex h-screen flex-col items-center'>
                <div className='max-h-[80vh] max-w-[80vh] pt-6'>
                    <div className='rounded-xl bg-gray-200 px-16'>
                        <video
                            key={videoUrl}
                            controls
                            preload='metadata'
                            className='left-0 top-0 h-full w-full'>
                            <source
                                src={videoUrl}
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='flex '>
                        <div className='py-2 text-white'>
                            <button className='hover:opacity-75'>
                                <IoCopy className='scale-125 text-gray-600' />
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
