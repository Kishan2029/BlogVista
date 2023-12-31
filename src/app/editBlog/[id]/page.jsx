"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter, useSearchParams } from "next/navigation";
import { editBlogFunction, deleteBlogFunction } from "@/actions/serverActions";
import useSWR from "swr";
import { notify } from "@/util/notify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import EditLoader from "@/components/EditLoader";

const fetcher = (url) =>
  fetch(url).then((res) => {
    function temp() {
      return res.json();
    }
    setTimeout(() => {
      temp();
      console.log("Hello");
    }, 4000);
  });

const EditBlog = ({ params: { id } }) => {
  // const { data: blogData } = await getBlog(id);
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/blogs/${id}`,
    fetcher,
  );

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const updateBlog = async () => {
    await editBlogFunction({
      title,
      summary,
      content,
      blogId: id,
    });
    router.push("/");
    notify("success", "Blog is updated");
  };

  const deleteBlog = async () => {
    await deleteBlogFunction(id);
    console.log("after math");
    router.push("/");
    notify("success", "Blog is deleted");
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
  if (isLoading) return <EditLoader />;
  return (
    <div className="flex-col space-y-4 ">
      <input
        type="text"
        id="title"
        placeholder="Enter title"
        className="w-full rounded-md border-2 border-gray-400 px-2 py-1"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        maxLength={150}
      />
      <input
        type="text"
        id="summary"
        placeholder="Enter summary"
        className="w-full rounded-md border-2 border-gray-400 px-2 py-1"
        onChange={(e) => setSummary(e.target.value)}
        value={summary}
        maxLength={350}
      />
      <input
        type="file"
        id="cover"
        placeholder="Select image"
        className="w-full rounded-md border-2 border-gray-400 px-2 py-1"
      />
      <div>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          style={{ height: "20rem" }}
        />
      </div>
      <div className="h-30 text-white sm:hidden">x</div>
      <div className="flex space-x-6">
        <button
          className="text-md mt-12 rounded-md bg-sky-600 px-4 py-2 text-white"
          onClick={updateBlog}
        >
          Update Blog
        </button>
        <button
          className="text-md mt-12 rounded-md bg-red-500 px-4 py-2 text-white"
          onClick={deleteBlog}
        >
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
