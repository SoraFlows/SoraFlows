import { PropsWithChildren } from 'react'
import { getQueryClient } from '@/lib/query-client.server'
import { getArticle } from '@/api/getArticle'
import { Metadata } from 'next'
import { LayoutHeader } from '@/components/Header'

export const generateMetadata = async (
    props: NextPageParams<{
        id: string
    }>
) => {
    const queryClient = getQueryClient()
    const { id } = props.params
    const queryKey = ['p', id]
    const article = await queryClient.fetchQuery({
        queryKey,
        queryFn: async () => {
            return (await getArticle(id))
        }
    })
    return {
        title: article?.title,
        description: article?.subtitle,
        openGraph: {
            title: article?.title,
            description: article?.subtitle || '',
            images: [
                {
                    url: article?.cover_image || ''
                }
            ]
        }
    } satisfies Metadata
}

export default async function Layout(
    props: NextPageParams<{
        lang: string,
        id: string
    }>
) {
    return (
        <div>
            <LayoutHeader locale={props.params.lang} page={`/p/${props.params.id}`} />
            {props.children}
        </div>
    )
}
