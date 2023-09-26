"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter, useSearchParams } from "next/navigation";
import { editBlogFunction } from "@/actions/serverActions";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });

const editBlog = ({ params: { id } }) => {
  // const { data: blogData } = await getBlog(id);
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/blogs/${id}`,
    fetcher
  );
  console.log("data", data);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const updateBlog = async () => {
    console.log(title, summary, content);
    await editBlogFunction({
      title,
      summary,
      content,
      blogId: id,
    });
    router.push("/");
  };

  useEffect(() => {
    console.log("useData", data);
    if (data !== undefined) {
      console.log("inside", data);
      setTitle(data.data.title);
      setContent(data.data.content);
      setSummary(data.data.summary);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="flex-col space-y-4 ">
      <input
        type="text"
        id="title"
        placeholder="Enter title"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        id="summary"
        placeholder="Enter summary"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
        onChange={(e) => setSummary(e.target.value)}
        value={summary}
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
