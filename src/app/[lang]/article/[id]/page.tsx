import { Metadata } from "next";
import { getArticle } from "@/api/getArticle";

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const article = await getArticle(params.id);
    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [
                {
                    url: article.image,
                },
            ],
        },
    };
}

export default function Article({ article }) {
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            {/* 点赞 发表时间 */}
            <p>{article.date}</p>
            <p>{article.author}</p>
            <p>{article.category}</p>
            <p>{article.tags}</p>
            
            <p>{article.content}</p>
            {/* 点赞 更新时间 */}
            <p>{article.updatedAt}</p>
            <img src={article.image} alt={article.title} />
        </div>
    );
}