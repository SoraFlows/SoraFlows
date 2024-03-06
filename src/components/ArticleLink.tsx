'use client'
import Image from 'next/image'
import {t_articles} from '@prisma/client'

export default function ArticleLink({article}: {article: t_articles}) {
    const urlLink =
        (article.short_title == null ? '' : article.short_title)
            .split(' ')
            .join('-') +
        '-' +
        article.uuid

    return (
        <div className={'h-[140px] w-[580px]'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex w-[390px] flex-col justify-around gap-1'}>
                    <a>{article.author}</a>
                    <a
                        className={'text-3xl font-bold'}
                        href={`/p/${urlLink}`}>
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
                        src={article.cover_image || ''}
                        alt={'png'}
                        width={250}
                        height={170}
                    />
                </a>
            </div>
        </div>
    )
}
// export default ArticleLink
//
