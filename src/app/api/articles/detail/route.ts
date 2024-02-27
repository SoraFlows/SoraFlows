import prisma from '@/lib/prisma'

export async function POST(req: Request) {
    const { id } = await req.json();
    const result = await prisma.t_articles.findUnique({
        where:{
            id: id,
        }
    });
    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}
