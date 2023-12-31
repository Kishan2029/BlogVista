import User from '@/models/User';
import Blog from "@/models/Blog";
import connectDB from "@/config/db";
import { revalidateTag } from 'next/cache';
import { formatDateToDayMonthYear } from '@/libs/helper/helper';




export const GET = async (request) => {

    try {
        await connectDB();

        let blogs = await Blog.find();
        blogs = blogs.map((item) => {
            return {
                ...item._doc,
                createdAt: formatDateToDayMonthYear(item.createdAt)
            }

        })

        // console.log("blog api", blogs)


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

        // upload an image

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
        // console.log("newBlog", newBlog)
        await newBlog.save();
        console.log("Blog is created");
        // revalidateTag('blogs')
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

        const { title, content, summary, coverImage, blogId } = await request.json();



        const getBlog = await Blog.findById(blogId);
        // console.log("getBlog", getBlog)
        getBlog.title = title;
        getBlog.content = content;
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

