import prisma from '@/lib/prisma'
import { t_articles } from '@prisma/client'

export async function getArticle(id: string): Promise<t_articles | null> {
    return prisma.t_articles.findUnique({
        where: {
            id: parseInt(id),
        }
    });
}