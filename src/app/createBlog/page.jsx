"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { revalidateTag } from "next/cache";
import { createBlogFunction } from "@/actions/serverActions";

const createBlog = () => {
  const { data, status } = useSession();

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  // const createBlogFunction = async () => {
  //   const body = {
  //     title,
  //     summary,
  //     content,
  //     id: data.user.id,
  //   };
  //   console.log("body", body);
  //   const res = await fetch("/api/blogs", {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   // revalidateTag("blogs");
  //   console.log("res", res);
  // };

  const saveBlog = async () => {
    console.log(title, summary, content);
    await createBlogFunction({
      title,
      summary,
      content,
      id: data.user.id,
    });
    router.push("/");
  };
  return (
    <div className="flex-col space-y-4 ">
      <input
        type="text"
        id="title"
        placeholder="Enter title"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="summary"
        placeholder="Enter summary"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        id="cover"
        placeholder="Select image"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
      />
      <div>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="h-60"
        />
      </div>
      <div>
        <button
          className="mt-12 bg-sky-600 px-4 py-2 text-white rounded-md text-md"
          onClick={saveBlog}
        >
          Save Blog
        </button>
      </div>
    </div>
  );
};

export default createBlog;
