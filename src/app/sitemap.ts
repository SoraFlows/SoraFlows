// src/app/sitemap.ts
import { MetadataRoute } from "next";
async function fetchAricles() {
    const res = await fetch( process.env.NEXT_PUBLIC_BASE_URL+"/articles"||"https://www.soraflows.com/api/articles");
    const data = await res.json();
    return data;
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await fetchAricles();
    return [
        {
            url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.soraflows.com/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: process.env.NEXT_PUBLIC_BASE_URL+"/"+"ar" || "https://www.soraflows.com/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
        ...products.map((aricles: any) => ({
            url: process.env.NEXT_PUBLIC_BASE_URL+"/aricles/"+aricles.id || `https://www.soraflows.com/aricles/${aricles.id}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        })),
    ];
}