'use client'
import Image from 'next/image'
import {t_articles} from '@prisma/client'

export default function ArticleLink({article}: {article: t_articles}) {
    return (
        <div className={'h-[140px] w-[580px]'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex w-[390px] flex-col justify-around gap-1'}>
                    <a>Author name</a>
                    <a
                        className={'text-3xl font-bold'}
                        href={`/p/${article.id}`}>
                        {article.title}
                    </a>
                    <a className={'text-gray-700'}>{article.description}</a>
                    <div className={'flex flex-row space-x-2'}>
                        <p>{`${article.created_time.getFullYear()}-${article.created_time.getMonth()}-${article.created_time.getDay()}`}</p>
                        <p>{article.word_count}</p>
                        <p>{article.cate1}</p>
                    </div>
                </div>
                <a href={`/p/${article.id}`}>
                    <Image
                        src={'/demo1.png'}
                        alt={'png'}
                        width={250}
                        height={170}
                    />
                </a>
            </div>
            {/*<motion.a*/}
            {/*    transition={{ duration: 0.2 }}*/}
            {/*    key={article.number}*/}
            {/*    className={`px-12 py-4 my-6 mx-12 bg-yellow-100 hover:bg-amber-50 hover:scale-105 border-2 border-black transform-gpu transition duration-100 hover:border-blue-300`}*/}
            {/*    href={`/p/${article.number}`}>*/}
            {/*    <span>{article.name}</span>*/}
            {/*</motion.a>*/}
        </div>
    )
}
// export default ArticleLink
//
