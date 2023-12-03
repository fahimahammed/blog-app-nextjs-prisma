import prisma from "@/lib/dbConfig";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const user = await getCurrentUser();

    try {
        if (!user?.email) {
            return NextResponse.json({ message: 'Not authenticated!' }, { status: 401 });
        }

        const { postId, text } = await req.json();

        const newComment = await prisma.comment.create({
            data: {
                postId,
                text,
                authorEmail: user?.email
            }
        });

        return NextResponse.json({ data: newComment }, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}
