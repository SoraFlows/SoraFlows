import React, {useEffect, useRef} from 'react'
import {IoCopy} from 'react-icons/io5'
import {Dialog} from '@headlessui/react'
import LoadingModal from '@/components/LoadingModal'

export default function VideoDisplay({key, videoUrl, prompt}) {
    const [showDialog, setShowDialog] = React.useState(false)
    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(prompt)
            // Display some feedback here if you want, like a toast notification
            console.log('Prompt copied to clipboard')
            setShowDialog(true)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='max-h-[80vh] max-w-[80vh] pt-6'>
                    <div className='rounded-xl bg-gray-200 px-16'>
                        <video
                            key={key}
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
                            <button
                                className='hover:opacity-75'
                                onClick={() => handleCopyToClipboard()}>
                                <IoCopy className='scale-125 text-gray-600' />
                            </button>
                            <span className='pl-4 text-black'>{prompt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
