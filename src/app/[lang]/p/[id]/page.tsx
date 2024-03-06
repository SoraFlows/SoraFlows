import {getArticle} from '@/api/getArticle'
import Markdown from 'markdown-to-jsx'
import {getQueryClient} from '@/lib/query-client.server'
import {mainContentOptions} from '@/markdown-style.config'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import React from 'react'
import Link from 'next/link'

type Props = {
    params: {id: string}
    searchParams: {[key: string]: string | string[] | undefined}
}

export default async function Articles({params, searchParams}: Props) {
    const queryClient = getQueryClient()
    let {id} = params

    const idList = id.split('-')
    const uuid = idList[idList.length - 1]
    const queryKey = ['p', uuid]
    const article = await queryClient.fetchQuery({
        queryKey,
        queryFn: async () => {
            return await getArticle(uuid)
        },
    })
    return (
        <>
            <div
                className={`m-auto mb-10 flex max-w-[680px] flex-col space-y-4`}>
                {article != undefined ? (
                    <>
                        <img
                            src={article.cover_image || ''}
                            alt={'banner'}
                            className={'w-screen'}
                        />
                        <h1 className={`text-[42px] font-bold`}>
                            {article?.title}
                        </h1>
                        <span className={`text-gray-600`}>
                            {article?.description}
                        </span>
                        <span className={`p-2 text-xl`}>{article?.author}</span>
                        {/*<div className={`border-y-2 border-y-gray-100 p-2 m-2`}>*/}
                        {/*    Read: {article?.read_count}*/}
                        {/*</div>*/}
                        <Markdown
                            className={`mt-4 font-serif-pro`}
                            options={mainContentOptions}>
                            {`${article?.content}`}
                        </Markdown>
                    </>
                ) : (
                    <div
                        className={`m-16 flex flex-col items-center justify-center text-4xl`}>
                        Article Not Found
                    </div>
                )}

                <div className={`flex flex-row justify-between text-4xl`}>
                    <Link href={`${parseInt(id) > 1 ? parseInt(id) - 1 : id}`}>
                        <BsArrowLeft
                            className={`transform-gpu transition duration-200 ease-in-out hover:scale-125`}
                        />
                    </Link>
                    <Link href={`${parseInt(id) + 1}`}>
                        <BsArrowRight
                            className={`transform-gpu transition duration-200 ease-in-out hover:scale-125`}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}
