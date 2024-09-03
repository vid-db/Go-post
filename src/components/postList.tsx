import Link from "next/link";

async function PostList() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('https://dummyjson.com/posts?limit=10')
    const data = await response.json();
    return (
        <ul className="grid grid-cols-4 gap-4">
            {data.posts.map((post: any) => (
                <li key={post.id}
                    className="relative bg-gray-50 p-4 border border-gray-300  rounded shadow-md hover:scale-105 transform transition-transform duration-300 ">
                    <Link href={`/posts/${post.id}`}
                        className="block w-full h-full text-gray-600">
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PostList
