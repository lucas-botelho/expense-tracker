import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const res = await request.json()
    const { title, content } = res;
    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {
                connect: { id: 'clruy3k4a0000n9esx84wwakn' },
            }
        }
    })

    return NextResponse.json({ result })
}