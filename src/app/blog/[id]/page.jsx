"use client";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import coverImage from "../../../../public/images/cover.jpeg";
import { stringSplit } from "@/util/helper";
import { useRouter, useSearchParams } from "next/navigation";
import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";
import { preload } from "swr";
import { useSession } from "next-auth/react";

async function getBlog(id) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    // cache: "no-cache",
    // next: { revalidate: 5 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const fetcher = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });

const blog = async ({ params: { id } }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log("session", session);
  const { data } = await getBlog(id);
  console.log("data", data);
  return (
    <div>
      {/* Title bar */}
      <div className="text-center mb-5">
        <div className="text-xl sm:text-3xl font-medium"> {data.title}</div>
        <div className="text-xs font-normal mt-2 mb-1 text-slate-600">
          {data.createdAt}
        </div>
        <div className="text-xs font-bold mb-3 text-black">{data.author}</div>
        {session !== null && session.user.id === data.createdBy && (
          <div className="flex justify-center">
            <button
              className="flex items-center space-x-2 bg-gray-700 py-2 px-4 rounded-md text-white text-sm"
              onClick={
                () => router.push(`/editBlog/${id}`)
                // router.push({
                //   pathname: `/editBlog/${id}`,
                //   query: { keyword: "this way" },
                // })
              }
              onMouseOver={() => {
                console.log("blue");
                preload(`http://localhost:3000/api/blogs/${id}`, fetcher);
              }}
            >
              <BiEdit />

              <span>Edit this blog</span>
            </button>
          </div>
        )}
      </div>

      <Image
        src={coverImage}
        alt="dfefe"
        // height={400}
        style={{ objectFit: "cover", height: "23rem", width: "100%" }}
      />

      <div className="mt-6">
        <div className="mb-6 text-base  text-slate-600 leading-relaxed">
          {/* {ReactHtmlParser(data.content)} */}
          {parse(data.content)}
          {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </div>
        {/* {stringSplit(data.content).map((item) => {
          return (
            <div className="mb-6 text-base  text-slate-600 leading-relaxed">
              {ReactHtmlParser(item)}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default blog;
