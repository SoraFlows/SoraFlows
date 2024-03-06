import prisma from '@/lib/prisma'
import {t_articles} from '@prisma/client'

export async function getArticle(uuid: string): Promise<t_articles | null> {
    return prisma.t_articles.findUnique({
        where: {
            uuid: uuid,
        },
    })
}
