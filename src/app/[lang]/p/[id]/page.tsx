import { Metadata, ResolvingMetadata } from 'next'
import { getArticle } from '@/api/getArticle'
import Markdown from 'markdown-to-jsx'
import { LayoutHeader } from '@/components/Header'
import { getQueryClient } from '@/lib/query-client.server'
import { options } from '@/markdown-style.config'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Articles({ params, searchParams }: Props) {
    const queryClient = getQueryClient()

    const { id } = params
    const queryKey = ['p', id]
    const article = await queryClient.fetchQuery({
        queryKey,
        queryFn: async () => {
            return (await getArticle(id))
        },
    })
    return (
        <>
            <div className={`m-auto max-w-[680px]`}>

                <Markdown className={`mt-4`} options={options}>
                    {`${article?.content}`}
                </Markdown>

            </div>
        </>
    )
}