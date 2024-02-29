import Footer from '@/components/Footer'
import HeadInfo from '@/components/HeadInfo'
import {LayoutHeader} from '@/components/Header'
import {Locale} from '@/i18n'
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server'

export default async function PrivacyPolicy({
    params: {lang},
}: {
    params: {lang: Locale}
}) {
    // Enable static rendering
    const tFooter = await getTranslations('footer')
    const tPrivacyPolicy = await getTranslations('privacyPolicy')

    const footerIntlText = {
        subtitle: tFooter('subtitle'),
        introduce: tFooter('introduce'),
        site: tFooter('site'),
    }

    return (
        <>
            <main className='min-w-250 py-auto px-auto left-[15%] top-[10%] flex min-h-screen flex-col items-center justify-center space-y-3 bg-home-background bg-cover bg-center p-4'>
                <HeadInfo
                    title={tPrivacyPolicy('title')}
                    description={tPrivacyPolicy('description')}
                    lang={lang}
                    page='/terms-of-service'
                />
                <LayoutHeader
                    lang={lang}
                    page='/terms-of-service'
                    mode='light'
                />

                <div className='mx-auto my-8 max-w-4xl rounded-lg p-6 shadow-lg'>
                    <h1 className='pb-6 text-center text-3xl font-extrabold'>
                        {tPrivacyPolicy('h1')}
                    </h1>
                    <p className='text-center text-sm text-gray-500'>
                        {tPrivacyPolicy('date')}
                    </p>
                    <p>{tPrivacyPolicy('desc')}</p>

                    <h4 className={'text-3x1 p-2 font-bold'}>
                        {tPrivacyPolicy('h4_1')}
                    </h4>
                    <p className='mt-2'>{tPrivacyPolicy('h4_1_pa')}</p>
                    <p className='mt-2'>{tPrivacyPolicy('h4_1_pb')}</p>
                    <h4 className={'text-3x1 p-2 font-bold'}>
                        {tPrivacyPolicy('h4_2')}
                    </h4>
                    <p className='mt-2'>{tPrivacyPolicy('h4_2_p')}</p>
                    <h4 className={'text-3x1 p-2 font-bold'}>
                        {tPrivacyPolicy('h4_3')}
                    </h4>
                    <p className='mt-2'>{tPrivacyPolicy('h4_3_p')}</p>
                    <h4 className={'text-3x1 p-2 font-bold'}>
                        {tPrivacyPolicy('h4_4')}
                    </h4>
                    <p className='mt-2'>{tPrivacyPolicy('h4_4_p')}</p>
                    <h4 className={'text-3x1 p-2 font-bold'}>
                        {tPrivacyPolicy('h4_5')}
                    </h4>
                    <p className='mt-2'>{tPrivacyPolicy('h4_5_p')}</p>
                    <h4 className={' text-3x1 p-2 font-bold'}>
                        {tPrivacyPolicy('h4_6')}
                    </h4>
                    <p className='mt-6'>
                        {tPrivacyPolicy('h4_6_p')}
                        <a
                            href='mailto:support@soraflows.com'
                            className={
                                'text-blue-500 underline hover:text-blue-600'
                            }>
                            support@soraflows.com
                        </a>
                        .
                    </p>
                </div>
                <Footer
                    year={new Date().getFullYear()}
                    companyName='SoraFlows'
                    intl={footerIntlText}
                    page={`privacy-policy`}
                />
            </main>
        </>
    )
}
