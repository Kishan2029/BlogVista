"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { revalidateTag } from "next/cache";
import { createBlogFunction } from "@/actions/serverActions";
import { notify } from "@/util/notify";

const createBlog = () => {
  const { data, status } = useSession();

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const saveBlog = async () => {
    console.log(title, summary, content);
    if (title === "" || summary === "" || content === "") {
      console.log("Helo");
      notify("error", "Title, summary or content cannot be empty.");
    } else {
      await createBlogFunction({
        title,
        summary,
        content,
        id: data.user.id,
      });
      router.push("/");
      notify("success", "Blog is created");
    }
  };
  return (
    <div className="flex-col space-y-4 ">
      <input
        type="text"
        id="title"
        placeholder="Enter title"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
        onChange={(e) => setTitle(e.target.value)}
        maxLength={150}
      />
      <input
        type="text"
        id="summary"
        placeholder="Enter summary"
        className="border-2 rounded-md px-2 py-1 w-full border-gray-400"
        onChange={(e) => setSummary(e.target.value)}
        maxLength={350}
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
          style={{ height: "20rem" }}
        />
      </div>
      <div className="h-30 text-white sm:hidden">x</div>
      <div className="flex space-x-6">
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
