import {getArticle} from '@/api/getArticle'
import Markdown from 'markdown-to-jsx'
import {getQueryClient} from '@/lib/query-client.server'
import {mainContentOptions} from '@/markdown-style.config'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import React from "react";
import Link from "next/link";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Articles({params, searchParams}: Props) {
    const queryClient = getQueryClient()

    const {id} = params
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
                {article != undefined ?
                    <div>
                        <div className={`text-[42px] font-bold`}>
                            {article?.title}
                        </div>
                        <div>
                            {article?.description}
                        </div>
                        <div className={`text-xl p-2`}>
                            {article?.author}
                        </div>
                        {/*<div className={`border-y-2 border-y-gray-100 p-2 m-2`}>*/}
                        {/*    Read: {article?.read_count}*/}
                        {/*</div>*/}
                        <Markdown className={`mt-4`} options={mainContentOptions}>
                            {`${article?.content}`}
                        </Markdown>
                    </div>
                    :
                    <div className={`m-16 flex flex-col justify-center items-center text-4xl`}>Article Not Found</div>}

                <div className={`flex flex-row justify-between text-4xl`}>
                    <Link href={`${parseInt(id) > 1 ? parseInt(id) - 1 : id}`}>
                        <BsArrowLeft
                            className={`hover:scale-125 transition transform-gpu ease-in-out duration-200`}/>
                    </Link>
                    <Link href={`${parseInt(id) + 1}`}>
                        <BsArrowRight
                            className={`hover:scale-125 transition transform-gpu ease-in-out duration-200`}/>
                    </Link>
                </div>
            </div>

        </>
    )
}