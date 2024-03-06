import prisma from '@/lib/prisma'
import {t_articles} from '@prisma/client'

export async function getArticleList(
    skip: number,
    take: number,
): Promise<t_articles[] | null> {
    return prisma.t_articles.findMany({
        skip,
        take,
    })
}
