import ArticleLink from '@/components/ArticleLink'
import Soraflows from '@/components/Soraflows'

export default async function Post() {
    const articleList: {
        name: string
        number: number
    }[] = [
        {name: 'first article', number: 1},
        {name: 'second article', number: 2},
        {name: 'third article', number: 3},
        {name: 'forth article', number: 4},
        {name: '1', number: 5},
        {name: '1', number: 6},
        {name: '1', number: 7},
    ]
    const articles = articleList.slice(0, 10)
    return (
        <div className={`flex flex-col items-center p-10  font-serif-pro`}>
            {/*<div>*/}
            <Soraflows />
            <span className={'border-gray-300 pb-6 text-2xl text-blue-500'}>
                Catch up everything about AI
            </span>
            {/*</div>*/}
            <div
                className={`mt-12 flex flex-row justify-center space-x-[40vh]`}>
                <ul
                    className={`grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2`}>
                    {articles.map((item) => {
                        return (
                            <ArticleLink
                                name={item.name}
                                number={item.number}
                                key={item.number}
                            />
                        )
                    })}
                </ul>
            </div>
            {/*<h2 className={'text-3xl text-indigo-700 mt-10 font-bold'}>Wiki</h2>*/}
        </div>
    )
}
