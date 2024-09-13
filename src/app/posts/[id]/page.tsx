import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const Post = async ({ params }: { params: { id: string } }
) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });

    if (!post) {
        notFound();
    }
    return (
        <main className="text-center pt-24 px-7 mb-4">
            <h1 className="font-semibold text-5xl mb-7"> {post.title}</h1>
            <p className="max-w-[700px] mx-auto">{post.content}</p>
        </main >
    )
}

export default Post
