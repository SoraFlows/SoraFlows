import VideoWrapper from '@/components/VideoWrapper'
import VideoCarousel from '@/components/VideoCarousel'
import {allExampleVideoList} from '@/app/data/openaiExampleVideo'
import {LayoutHeader} from '@/components/Header'
import {useTranslations} from 'next-intl'
import {Locale} from '@/i18n'

// This page only renders when the app is built statically (output: 'export')
export default function VideoShowCase({
    params: {lang},
}: {
    params: {lang: Locale}
}) {
    const t = useTranslations('videos')

    const videos = allExampleVideoList
    return (
        <>
            <div className='flex flex-col items-center rounded-2xl border-[14px] border-b-blue-300 bg-white p-16'>
                <h1 className=''>{t('h1')}</h1>
                <div className='mb-8 gap-7 py-4 [column-count:1] md:mb-20 md:[column-count:2] lg:mb-32 lg:[column-count:3]'>
                    {videos.map((item) => {
                        return (
                            <div
                                key={item.number}
                                className='break-inside-avoid p-2'>
                                <VideoCarousel videos={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
