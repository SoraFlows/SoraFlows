'use server'
import VideoCarousel from '@/components/VideoCarousel'
import Link from 'next/link'

export default async function VideoWrapper({randomTenVideos, intl}) {
    // const t = useTranslations('homepage')
    return (
        <div className='flex flex-col items-center rounded-2xl border-[14px] border-b-blue-300 bg-white p-16'>
            <span className='col-span-3 text-xl font-bold text-gray-600 md:text-2xl'>
                {intl.demoTitle}{' '}
            </span>
            <div className='mb-8 gap-7 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]'>
                {randomTenVideos.map((item) => {
                    return (
                        <div
                            key={item.number}
                            className='break-inside-avoid p-2'>
                            <VideoCarousel videos={item} />
                        </div>
                    )
                })}
            </div>
            <Link
                className={`flex transform-gpu flex-row items-center justify-center gap-4 text-3xl text-indigo-400 transition duration-200 hover:scale-105 hover:text-indigo-600`}
                href={`/videos`}>
                {intl.moreVideo} {'>>>'}
            </Link>
        </div>
    )
}
