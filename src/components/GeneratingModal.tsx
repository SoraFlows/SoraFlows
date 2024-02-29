import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useCommonContext } from '@/context/common-context'
import Link from 'next/link'
import { ExampleVideo, getRandomVideo } from '@/app/data/openaiExampleVideo'
import clsx from 'clsx'
import { FiExternalLink } from 'react-icons/fi'

export default function GeneratingModal({
                                            generatingText
                                        }) {

    const cancelButtonRef = useRef(null)
    const { showGeneratingModal, setShowGeneratingModal } = useCommonContext()
    const [videos, setVideos] = useState<ExampleVideo[]>([])
    useEffect(() => {
        const videos = getRandomVideo(2)
        setVideos(videos)
    }, [])


    return (
        <Transition.Root show={showGeneratingModal} as={Fragment}>
            <Dialog as="div" className="relative z-30" initialFocus={cancelButtonRef} onClose={setShowGeneratingModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-30 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-4"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl">
                                <div className="flex flex-col items-center justify-center m-10 space-y-4">
                                    <div
                                        className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-xl transition ease-in-out duration-150"
                                        style={{ color: '#2d6ae0' }}>
                                        <svg className="animate-spin -ml-1 mr-3 h-10 w-10" style={{ color: '#2d6ae0' }}
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {generatingText}
                                    </div>
                                    <div className={'flex flex-row space-x-6'}>
                                        {videos.map((video) => {
                                            return (
                                                <div key={video.number}
                                                     className={'flex flex-col justify-center items-center space-y-3'}>
                                                    <video
                                                        key={video.videoUrl}
                                                        controls
                                                        preload="metadata"
                                                        className="top-0 left-0 h-full max-w-[50vh] max-h-[50vh]"
                                                    >
                                                        <source src={video.videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    <Link
                                                        className={'border-2 rounded-2xl border-black p-2 flex flex-row justify-center items-center'}
                                                        target={'_blank'} href={`/videos/${video.number}`}>Open
                                                        Video &nbsp;<FiExternalLink /></Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {/*<div>*/}
                                    <button className={clsx('border-2 border-gray-700 ',
                                        'rounded-2xl p-2',
                                        'w-full')}
                                            onClick={() => {
                                                setVideos(getRandomVideo(2))
                                            }}>Refresh
                                    </button>
                                    {/*</div>*/}
                                    <div className={'font-bold'}>
                                        Your video will be ready in a few minutes
                                    </div>
                                    <div className={'text-gray-600 font-bold'}>
                                        The exported video will be saved in your &nbsp;
                                        <Link href={'/history'} className={'text-blue-400'}>History</Link>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
