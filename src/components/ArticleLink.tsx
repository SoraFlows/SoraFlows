'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ArticleLink = (article: { name: string; number: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={'mt-14'}>
            <motion.a
                transition={{ duration: 0.3 }}
                key={article.number}
                className={`px-12 py-4 my-6 mx-12 bg-yellow-100 hover:bg-amber-50 hover:scale-105 border-2 border-black transform-gpu transition duration-100 hover:border-blue-300`}
                href={`/p/${article.number}`}>
                <span>{article.name}</span>
            </motion.a>
        </motion.div>
    );
};
export default ArticleLink;
