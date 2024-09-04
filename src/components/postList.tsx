import prisma from "@/lib/db";
import Link from "next/link";

async function PostList() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const posts = await prisma.post.findMany();

    return (
        <ul className="grid grid-cols-4 gap-4">
            {posts.map((post: any) => (
                <li key={post.id}
                    className="relative bg-gray-50 p-4 border border-gray-300  rounded-md drop-shadow-lg hover:scale-105 transform transition-transform duration-300 ">
                    <Link href={`/posts/${post.id}`}
                        className="block w-full h-full text-gray-600 text-lg font-medium">
                        Title:&nbsp;&nbsp;{post.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PostList
