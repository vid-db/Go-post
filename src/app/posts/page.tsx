import PostList from "@/components/postList"
import { Suspense } from "react"


const AllPosts = async () => {

    return (
        <main className="text-center p-16 px-5">
            <h1 className="text-4xl font-bold md:text-5xl mb-10">
                All posts
            </h1>
            <Suspense fallback="Lodding...">
                <PostList />
            </Suspense>

        </main>

    )
}

export default AllPosts