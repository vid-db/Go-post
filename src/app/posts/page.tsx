import PostList from "@/components/postList";


const AllPosts = async () => {
    return (
        <main className="text-center p-16 px-5">
            <h1 className="text-4xl font-bold md:text-5xl mb-10">
                Random posts
            </h1>
            <PostList />
        </main>
    );
}

export default AllPosts;
