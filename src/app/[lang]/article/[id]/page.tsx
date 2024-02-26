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