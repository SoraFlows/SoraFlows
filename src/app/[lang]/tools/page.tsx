import { Locale } from '@/i18n'

export default function Tools({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <div>
      <h1>AI Tools</h1>
      <div className=''>
        <a href={`/${lang}/tools/aitoolboard`}
        className='hover:blue-500'
        >AI ToolBoard</a>
      </div>
    </div>
  );
}