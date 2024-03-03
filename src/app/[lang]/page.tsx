'use server'
import MainContent from '@/components/MainContent'
import {LayoutHeader} from '@/components/Header'
import VideoCarousel from '@/components/VideoCarousel'
import Footer from '@/components/Footer'
import {allExampleVideoList} from '@/app/data/openaiExampleVideo'
import {Locale} from '@/i18n'
import {shuffleArray} from '@/lib/shuffle'
import VideoWrapper from '@/components/VideoWrapper'
import {getTranslations} from 'next-intl/server'

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
    const videos = allExampleVideoList
    shuffleArray(videos)
    const randomTenVideos = videos.slice(0, 10)
    const tMetadata = await getTranslations('metadata')
    const tHomepage = await getTranslations('homepage')
    const tFooter = await getTranslations('footer')
    const homepageIntlText = {
        pDescription: tHomepage('pDescription'),
        introduce: tHomepage('introduce'),
        introduce_2: tHomepage('introduce_2'),
        get_started: tHomepage('get_started'),
    }

    const footerIntlText = {
        subtitle: tFooter('subtitle'),
        introduce: tFooter('introduce'),
        site: tFooter('site'),
    }

    const metadataIntlText = {
        title: tMetadata('title'),
        description: tMetadata('description'),
    }
    // const messages = useMessages()
    return (
        <>
            <header>
                <title>{metadataIntlText.title}</title>
                <meta
                    name='description'
                    content={metadataIntlText.description}
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                    type='image/x-icon'></link>
            </header>
            <main className='min-w-250 py-auto flex min-h-screen flex-col items-center justify-center space-y-3 bg-home-background bg-cover bg-center p-4'>
                <LayoutHeader
                    lang={lang}
                    page='/'
                    mode='light'
                />
                <div className='left-[15%] top-[10%]'>
                    <MainContent intl={homepageIntlText} />
                </div>
                <VideoWrapper
                    randomTenVideos={randomTenVideos}
                    intl={homepageIntlText}
                />
                <Footer
                    year={new Date().getFullYear()}
                    companyName='SoraFlows'
                    intl={footerIntlText}
                    page={'/'}
                />
            </main>
        </>
    )
}
