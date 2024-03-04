import { LayoutHeader } from '@/components/Header';
import Footer from '@/components/Footer';
import { getQueryClient } from '@/lib/query-client.server';
import { getArticle } from '@/api/getArticle';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ScrollTop from '@/components/ScrollTop'

export const generateMetadata = async () => {
    return {
        title: '文章首页',
        description: '文章首页',
        openGraph: {
            title: '文章首页',
            description: '文章首页',
            images: [
                {
                    url: '文章首页',
                },
            ],
        },
    } satisfies Metadata;
};

export default async function ArticleLayout(
    props: NextPageParams<{
        lang: string;
        id: string;
    }>,
) {
    const tFooter = await getTranslations('footer');
    const footerIntlText = {
        subtitle: tFooter('subtitle'),
        introduce: tFooter('introduce'),
        site: tFooter('site'),
    };
    return (
        <>
            <LayoutHeader
                lang={props.params.lang}
                page={`/p/${props.params.id}`}
            />
            {props.children}
            <Footer
                year={new Date().getFullYear()}
                companyName='SoraFlows'
                intl={footerIntlText}
                page={`p/${props.params.id}`}
            />
        </>
    );
}
