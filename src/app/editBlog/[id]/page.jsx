"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter, useSearchParams } from "next/navigation";

async function getBlog(id) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    // cache: "no-cache",
    // next: { revalidate: 5 },
  });
  console.log("response", res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const editBlog = ({ params: { id } }) => {
  // const { data: blogData } = await getBlog(id);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const editBlogFunction = async (id) => {
    const body = {
      title,
      summary,
      content,
      blogId: id,
    };
    console.log("body", body);
    const res = await fetch("/api/blogs", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("res", res);
  };

  const updateBlog = async () => {
    console.log(title, summary, content);
    await editBlogFunction(id);
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
          onClick={updateBlog}
        >
          Update Blog
        </button>
      </div>
    </div>
  );
};

export default editBlog;
