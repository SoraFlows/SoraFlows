import { FaStarOfDavid } from 'react-icons/fa'
import { AiFillFileImage } from 'react-icons/ai'
import { MdOutlineAttachFile } from 'react-icons/md'
import React from 'react'
import { allExampleVideoList } from '@/app/data/openaiExampleVideo'
import { IoCopy } from 'react-icons/io5'

export default function VideoDisplay() {
    const allExampleVideos = allExampleVideoList
    return (
        <>
            <div className="flex h-screen flex-col items-center">
                <div className="pt-32 max-h-[70vh] max-w-[70vh]">
                    <div className="bg-[#1f1f1f] rounded-xl px-16">
                        <video
                            key={allExampleVideos[0].number}
                            controls
                            preload="metadata"
                            className="top-0 left-0 h-full w-full"
                        >
                            <source src={allExampleVideos[0].videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="flex ">

                        <div className="text-white py-2">
                            <button className='hover:opacity-75'>
                                <IoCopy className="text-gray-600 scale-125" />
                            </button>
                            <span className='pl-4'>
                            {allExampleVideos[0].prompt}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className="absolute border-black border-2 p-4 rounded-2xl bottom-[5%] left-[50%] -translate-x-1/2 flex items-center bg-[#1f1f1f]">
                <button className="scale-150 hover:opacity-75 text-white">
                    <MdOutlineAttachFile />
                </button>
                <input id="prompt-input"
                       className="outline-0 relative resize-none p-2 mx-4 h-12 rounded min-w-[80vh] text-xl bg-[#1f1f1f] text-gray-100"
                       placeholder="Describe your magic">
                </input>
                <button className="-right-0 p-2 scale-125 rounded bg-[#c4b7a2] text-black hover:opacity-75">
                    <FaStarOfDavid />
                </button>
            </div>
        </>
    )
}