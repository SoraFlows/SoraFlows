import { Metadata, ResolvingMetadata } from "next";
import { getArticle } from "@/api/getArticle";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({ params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata>{
    const id = params.id;

    // fetch data
    const article = await getArticle(id);

    // optionally access and extend (rather than replace) parent metadata
     const previousImages = (await parent).openGraph?.images || []
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

export default async function Articles({params, searchParams}: Props) {
    return (
        <>
        <div>
            {/**
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            
            <p>{article.date}</p>
            <p>{article.author}</p>
            <p>{article.category}</p>
            <p>{article.tags}</p>
            
            <p>{article.content}</p>
           
            <p>{article.updatedAt}</p>
            <img src={article.image} alt={article.title} />
        **/}
        </div>
        </>
    );
}