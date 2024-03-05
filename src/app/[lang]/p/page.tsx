import ArticleLink from '@/components/ArticleLink'
import Soraflows from '@/components/Soraflows'
import {getQueryClient} from '@/lib/query-client.server'
import {getArticleList} from '@/api/getArticleList'

export default async function Post({
    params: {skip = 0, take = 10},
}: {
    params: {skip: number; take: number}
}) {
    const queryClient = getQueryClient()

    const queryKey = ['p', `${skip}+${take}`]
    const articles = await queryClient.fetchQuery({
        queryKey,
        queryFn: async () => {
            return await getArticleList(skip, take)
        },
    })
    // console.log(articles)
    return (
        <div
            className={`flex min-h-screen flex-col items-center p-10 font-serif-pro`}>
            <Soraflows />
            <span className={'border-gray-300 pb-6 text-2xl text-blue-500'}>
                Catch up everything about AI
            </span>
            <div
                className={`mt-12 flex flex-row justify-center space-x-[40vh]`}>
                <ul
                    className={`grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2`}>
                    {articles?.map((item) => {
                        return (
                            <ArticleLink
                                key={item.id}
                                article={item}
                            />
                        )
                    })}
                </ul>
            </div>
            {/*<h2 className={'text-3xl text-indigo-700 mt-10 font-bold'}>Wiki</h2>*/}
        </div>
    )
}
