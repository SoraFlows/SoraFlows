import ArticleLink from '@/components/ArticleLink';
import Soraflows from '@/components/Soraflows';

export default async function Post() {
    const articleList: {
        name: string;
        number: number;
    }[] = [
        { name: 'first article', number: 1 },
        { name: 'second article', number: 2 },
        { name: 'third article', number: 3 },
        { name: 'forth article', number: 4 },
        { name: '1', number: 5 },
    ];
    const articles = articleList.slice(0, 10);
    return (
        <div className={`h-screen flex-col flex items-center p-10`}>
            <Soraflows />
            <span
                className={
                    'text-3xl text-blue-500 border-b-2 border-gray-300 pb-6'
                }>
                Explore everything about Sora in SoraFlows
            </span>
            <h2 className={'text-3xl text-indigo-700 mt-10 font-bold'}>
                Posts
            </h2>
            <ul className={`grid grid-cols-3 mt-6`}>
                {articles.map((item) => {
                    return (
                        <ArticleLink
                            name={item.name}
                            number={item.number}
                            key={item.number}
                        />
                    );
                })}
            </ul>
            <h2 className={'text-3xl text-indigo-700 mt-10 font-bold'}>Wiki</h2>
        </div>
    );
}
