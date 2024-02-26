
export async function getArticle(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "https://www.soraflows.com"}/articles/${id}`);
    const data = await res.json();
    return data;
}