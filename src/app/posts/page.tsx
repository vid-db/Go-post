import PostList from "@/components/postList";
import { Suspense } from "react";
import Loading from "./loading";


const AllPosts = async () => {
    return (
        <main className="text-center p-16 px-5">
            <h1 className="text-4xl font-bold md:text-5xl mb-10">
                Random posts
            </h1>
            <Suspense fallback={<Loading />}>
                <PostList />
            </Suspense>
        </main>
    );
}

export default AllPosts;
