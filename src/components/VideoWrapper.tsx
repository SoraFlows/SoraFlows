'use server'
import VideoCarousel from '@/components/VideoCarousel'
import Link from 'next/link'

export default async function VideoWrapper({randomTenVideos, intl}){
    // const t = useTranslations('homepage')
    return (
        <div className="bg-white rounded-2xl border-[14px] border-b-blue-300 p-16 flex flex-col items-center">
                    <span
                        className="col-span-3 text-xl md:text-2xl font-bold text-gray-600">{intl.demoTitle} </span>
            <div
                className="mb-8 gap-7 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
                {randomTenVideos.map((item) => {
                    return (
                        <div key={item.number} className="p-2 break-inside-avoid">
                            <VideoCarousel videos={item} />
                        </div>
                    )
                })}
            </div>
            <Link
                className={`text-3xl flex flex-row justify-center items-center gap-4 text-indigo-400 hover:text-indigo-600 transition duration-200 hover:scale-105 transform-gpu`}
                href={`/videos`}>
                {intl.moreVideo} {'>>>'}
            </Link>
        </div>
    )
}