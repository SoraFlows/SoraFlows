'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'

const ArticleLink = (article: {name: string; number: number}) => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
            className={'h-[140px] w-[580px]'}>
            <div className={'flex flex-row gap-14'}>
                <div className={'flex flex-col justify-around gap-1'}>
                    <a>Author name</a>
                    <a
                        className={'text-3xl font-bold'}
                        href={`/p/${article.number}`}>
                        {article.name}
                    </a>
                    <a className={'text-gray-700'}>{article.name}</a>
                    <div className={'flex flex-row space-x-2'}>
                        <p>2024.2.1</p>
                        <p>9 min read</p>
                        <p>Category1</p>
                    </div>
                </div>
                <a href={`/p/${article.number}`}>
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
        </motion.div>
    )
}
export default ArticleLink
