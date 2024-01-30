import prisma from "@/lib/prisma";

export async function GET(request: Request) {

    //opt out of cache by using a method different from get or using the request object
    request.headers.get("Content-Type");
    const posts = await prisma.post.findMany({
        where: {
            published: true,
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    });

    const response = new Response(JSON.stringify({ posts }));

    return response;
}
