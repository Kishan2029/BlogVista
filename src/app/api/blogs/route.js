import User from '@/models/User';
import Blog from "@/models/Blog";
import connectDB from "@/config/db";
// const Blog = require("../../../models/Blog")


export const GET = async (request) => {
    console.log("inside get blog")
    try {
        await connectDB();

        const blogs = await Blog.find();
        console.log("blog api", blogs)


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


        const { title, content, summary, coverImage, id } = await request.json();

        const user = await User.findById(id);

        if (!user)
            return new Response(JSON.stringify({
                notification: {
                    value: true,
                    message: "Blog is added"
                }
            }), { status: 500 });

        const newBlog = new Blog({ title, content, summary, createdBy: id, author: user.name });
        console.log("newBlog", newBlog)
        await newBlog.save();
        console.log("Blog is created");
        // return new Response("success")
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