import VideoWrapper from '@/components/VideoWrapper'
import VideoCarousel from '@/components/VideoCarousel'
import { allExampleVideoList } from '@/app/data/openaiExampleVideo'
import { LayoutHeader } from '@/components/Header'
import { useTranslations } from 'next-intl'
import { Locale } from '@/i18n'

// This page only renders when the app is built statically (output: 'export')
export default function VideoShowCase({ params: { lang } }: { params: { lang: Locale } }) {
    const t = useTranslations('videos')

    const videos = allExampleVideoList
    return (
        <>
            <LayoutHeader lang={lang} page={'/video'}/>

            <div className="bg-white rounded-2xl border-[14px] border-b-blue-300 p-16 flex flex-col items-center">
                <h1 className="">
                    {t('h1')}
                </h1>
                <div
                    className="mb-8 gap-7 py-4 [column-count:1] md:mb-20 md:[column-count:2] lg:mb-32 lg:[column-count:3]">
                    {videos.map((item) => {
                        return (
                            <div key={item.number} className="p-2 break-inside-avoid">
                                <VideoCarousel videos={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
