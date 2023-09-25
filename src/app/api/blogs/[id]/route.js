
import User from "@/models/User";
import Blog from "@/models/Blog";
import connectDB from "@/config/db";
export const GET = async (request, { params }) => {

    try {
        await connectDB();

        const blog = await Blog.findById(params.id)
        // console.log("blog", blog)

        return new Response(JSON.stringify({
            data: blog, notification: {
                value: false
            }
        }), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 