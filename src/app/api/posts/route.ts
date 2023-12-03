import prisma from "@/lib/dbConfig";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const user = await getCurrentUser();
    console.log({ user })
    try {
        if (!user?.email) {
            return NextResponse.json({ message: 'Not authenticated!' }, { status: 401 });
        }

        const { title, content } = await req.json();

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                authorEmail: user?.email
            }
        });

        return NextResponse.json({ data: newPost }, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    console.log("ok")
    return NextResponse.json({ message: "ok" }, { status: 200 })

}