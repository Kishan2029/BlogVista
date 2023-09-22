
import User from "@/models/User";
import Blog from "@/models/Blog";
import connectDB from "@/config/db";


export const GET = async (request) => {
    try {
        await connectDB();

        const blogs = await Blog.find();

        return new Response(JSON.stringify({
            data: blogs, notification: {
                value: false
            }
        }), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all blogs", { status: 500 })
    }
}

export const POST = async (request) => {
    try {
        await connectDB();

        const { title, description, summary, coverImage } = await request.json();
        const newBlog = new Blog({ title, description, summary });

        await newBlog.save();
        return new Response(JSON.stringify({
            data: newBlog, notification: {
                value: true,
                message: "Blog is added"
            }
        }), { status: 201 });
    } catch (error) {
        return new Response("Failed to fetch all blogs", { status: 500 })
    }
}

export const PUT = async (request) => {
    try {
        await connectDB();

        const { title, description, summary, coverImage, blogId } = await request.json();
        const getBlog = await Blog.findById(blogId);
        getBlog.title = title;
        getBlog.description = description;
        getBlog.summary = summary;

        await getBlog.save();
        return new Response(JSON.stringify({
            data: newBlog, notification: {
                value: true,
                message: "Blog is updated"
            }
        }), { status: 201 });
    } catch (error) {
        return new Response("Failed to fetch all blogs", { status: 500 })
    }
}