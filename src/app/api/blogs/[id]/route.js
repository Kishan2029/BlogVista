
import User from "@/models/User";
import Blog from "@/models/Blog";
import connectDB from "@/config/db";

export const GET = async (request, { params }) => {

    try {
        await connectDB();

        const blog = await Blog.findById(params.id)

        return new Response(JSON.stringify({
            data: blog, notification: {
                value: false
            }
        }), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

export const POST = async (request, { params }) => {
    console.log("detete Blog request")
    try {
        await connectDB();

        await Blog.deleteOne({ _id: params.id })


        return new Response(JSON.stringify({
            notification: {
                value: true,
                message: "Blog is deleted"
            }
        }), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 