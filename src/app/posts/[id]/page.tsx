const Post = async ({ params }: { params: { id: string } }
) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await response.json();
    return (
        <main className="text-center pt-24 px-7">
            <h1 className="font-semibold text-5xl mb-7"> {post.title}</h1>
            <p className="max-w-[700px] mx-auto">{post.body}</p>
        </main >
    )
}

export default Post
