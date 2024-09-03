import { createPost } from "@/action/action"

const CreatePost = () => {
    return (
        <main className="text-center pt-16">
            <h2 className="font-bold md:text-4xl mb-5">CreatePost</h2>
            <form
                action={createPost}
                className="max-w-[500px] mx-auto space-y-4">

                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    required
                    className="w-full mt-1 p-2 border border-zinc-300 rounded-md focus:border-2 focus:border-blue-300 
                     focus:outline-none" />



                <textarea
                    placeholder="Content"
                    name="content"
                    required
                    className="w-full mt-1 p-2 border
                     border-zinc-300 rounded-md
                     focus:border-2 focus:border-blue-300 
                     focus:outline-none" rows={5}>
                </textarea>

                <button className="w-full p-2 bg-blue-600 text-white rounded-md">Create Post</button>
            </form>

        </main>
    )
}

export default CreatePost