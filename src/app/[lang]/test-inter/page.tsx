import {useTranslations} from 'next-intl';

export default function Index() {
    const t = useTranslations('homepage');
    return <h1>{t('lang')}</h1>;
}