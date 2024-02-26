import { title } from "process";

export async function getArticle(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "https://www.soraflows.com"}/articles/${id}`);
    const data = await res.json();
    return {
        title: data.title,
        description: data.description,
        date: data.date,
        content: data.content,
        author: data.author,
        category: data.category,
        tags: data.tags,
        updatedAt: data.updatedAt,
        image: data.image,
        lang: data.lang,
        slug: data.slug,
        url: data.url,
        langName: data.langName,
        langCode: data.langCode,
        langDir: data.langDir,
        langDirName: data.langDirName,
        langDirCode: data.langDirCode,
        langDirDir: data.langDirDir,
    }
}