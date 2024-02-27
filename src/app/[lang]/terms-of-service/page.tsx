import Footer from '@/components/Footer';
import HeadInfo from '@/components/HeadInfo';
import { LayoutHeader } from '@/components/Header';
import { Locale } from '@/i18n';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';


export default async function PageContent({ params: { lang } }: { params: { lang: Locale } }) {
  // Enable static rendering
  const tMetadata = await getTranslations('metadata')
  const tHomepage = await getTranslations('homepage')
  const tFooter = await getTranslations('footer')
  const termsOfService = await getTranslations('termsOfService')
  const homepageIntlText = {
    pDescription: tHomepage('pDescription'),
    introduce: tHomepage('introduce'),
    introduce_2: tHomepage('introduce_2'),
    get_started: tHomepage('get_started')
  }

  const footerIntlText = {
    subtitle: tFooter('subtitle'),
    introduce: tFooter('introduce'),
    site: tFooter('site')
  }


  return (
    <>
    <main className="flex min-w-250 min-h-screen py-auto px-auto flex-col items-center justify-center p-4 bg-home-background bg-cover space-y-3 bg-center top-[10%] left-[15%]">
      <HeadInfo
        title={termsOfService('title')}
        description={termsOfService('description')}
        lang={lang}
        page="/terms-of-service"
        />
      <LayoutHeader lang={lang} page="/terms-of-service" mode="light" />

        <div className="max-w-4xl mx-auto my-8 p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-extrabold pb-6 text-center">
          {termsOfService('h1')}
          </h1>
          <p className='text-sm text-gray-500 text-center'>{termsOfService('date')}</p>
          <p>{termsOfService('desc')}</p>


          <h4 className={"text-3x1 font-bold p-2"}>{termsOfService('h4_1')}</h4>
          <p className='mt-2'>{termsOfService('h4_1_p')}</p>
          <h4 className={"text-3x1 font-bold p-2"}>{termsOfService('h4_2')}</h4>
          <p className='mt-2'>{termsOfService('h4_2_p')}</p>
          <h4 className={"text-3x1 font-bold p-2"}>{termsOfService('h4_3')}</h4>
          <p className='mt-2'>{termsOfService('h4_3_p')}</p>
          <h4 className={"text-3x1 font-bold p-2"}>{termsOfService('h4_4')}</h4>
          <p className='mt-2'>{termsOfService('h4_4_p')}</p>
          <h4 className={"text-3x1 font-bold p-2"}>{termsOfService('h4_5')}</h4>
          <p className='mt-2'>{termsOfService('h4_5_p')}</p>
          <h4 className={" text-3x1 font-bold p-2"}>{termsOfService('h4_6')}</h4>
          <p className='mt-2'>{termsOfService('h4_6_p')}</p>
          <h4 className={" text-3x1 font-bold p-2"}>{termsOfService('h4_7')}</h4>
          <p className='mt-2'>{termsOfService('h4_7_p')}</p>
          <h4 className={" text-3x1 font-bold p-2"}>{termsOfService('h4_8')}</h4>
          <p className='mt-2'>{termsOfService('h4_8_p')}</p>
          <h4 className={" text-3x1 font-bold p-2"}>{termsOfService('h4_9')}</h4>
          <p className='mt-6'>
            {termsOfService('h4_9_p')}
            <a href="mailto:support@soraflows.com"
              className={"text-blue-500 hover:text-blue-600 underline"}>
              support@soraflows.com
            </a>.
          </p>
        </div>
        <Footer year={new Date().getFullYear()} companyName="SoraFlows" intl={footerIntlText} />
      </main>

      
    </>
  )

}
