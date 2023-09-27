"use server"

import { revalidateTag } from "next/cache";

export const createBlogFunction = async (body) => {

    console.log("body", body);
    const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });
    revalidateTag("blogs");
    console.log("res", res);
};

export const editBlogFunction = async (body) => {

    console.log("body", body);
    const res = await fetch("http://localhost:3000/api/blogs", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });
    revalidateTag("blogs");
    console.log("res", res);
};

export const deleteBlogFunction = async (id) => {

    console.log("Inside deleteBlog front")
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    revalidateTag("blogs");
    // console.log("res", res);
};