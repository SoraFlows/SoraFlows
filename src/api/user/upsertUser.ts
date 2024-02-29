import prisma from '@/lib/prisma'
import { t_user } from '@prisma/client'
import { v4 } from 'uuid'

export const upsertUser = async (name: string, email: string, image: string): Promise<t_user | null> => {
    console.debug(name, email, image)
    const users = await prisma.t_user.findMany({
        where: {
            email: email
        }
    })
    return prisma.t_user.upsert(
        {
            where: {
                id: users.length !== 0 ? users[0].id : -1,
            },
            create: {
                uuid: v4(),
                email: email,
                nick_name: name,
                avatar_url: image
            },
            update: {
                email: email,
                nick_name: name,
                avatar_url: image
            }
        }
    )
}