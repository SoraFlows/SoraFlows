import { Metadata, ResolvingMetadata } from 'next'
import { getArticle } from '@/api/getArticle'
import Markdown from 'markdown-to-jsx'
import { LayoutHeader } from '@/components/Header'
import { getQueryClient } from '@/lib/query-client.server'
import { mainContentOptions } from '@/markdown-style.config'

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
            <div className={`m-auto max-w-[680px] flex flex-col space-y-4 mb-10`}>
                <div className={`text-[42px] font-bold`}>
                    {article?.title}
                </div>
                <div>
                    {article?.description}
                </div>
                <div className={`text-xl p-2`}>
                    {article?.author}
                </div>
                <div className={`border-y-2 border-y-gray-100 p-2 m-2`}>
                    Read: {article?.read_count}
                </div>
                <Markdown className={`mt-4`} options={mainContentOptions}>
                    {`${article?.content}`}
                </Markdown>

            </div>
        </>
    )
}