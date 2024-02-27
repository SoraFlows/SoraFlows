import prisma from '@/lib/prisma'

export async function POST(req: Request, res: Response) {
    const { current, size } = await req.json();
    const result = await prisma.t_articles.findMany({
        skip: current,
        take: size,
    });
    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}
