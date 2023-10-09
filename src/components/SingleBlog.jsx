"use client";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import coverImage from "../../public/images/cover.jpeg";
import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";
import { preload } from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";

const editBlogPrefetch = (url) =>
  fetch(url).then((res) => {
    return res.json();
  });

const SingleBlog = ({ data, id }) => {
  const { data: session, status } = useSession();
  return (
    <div>
      {/* Title bar */}
      <div className="mb-5 text-center">
        <div className="text-xl font-medium sm:text-3xl"> {data.title}</div>
        <div className="mb-1 mt-2 text-xs font-normal text-slate-600">
          {data.createdAt}
        </div>
        <div className="mb-3 text-xs font-bold text-black">{data.author}</div>
        {session !== null && session.user.id === data.createdBy && (
          <div className="flex justify-center">
            <Link href={`/editBlog/${id}`}>
              <button
                className="flex items-center space-x-2 rounded-md bg-gray-700 px-4 py-2 text-sm text-white"
                // onClick={() => router.push(`/editBlog/${id}`)}
                onMouseOver={() => {
                  preload(
                    `http://localhost:3000/api/blogs/${id}`,
                    editBlogPrefetch,
                  );
                }}
              >
                <BiEdit />

                <span>Edit this blog</span>
              </button>
            </Link>
          </div>
        )}
      </div>

      <Image
        src={coverImage}
        alt="dfefe"
        // height={400}
        style={{ objectFit: "cover", height: "23rem", width: "100%" }}
        priority={true}
      />

      <div className="mt-6">
        <div className="mb-6 text-base  leading-relaxed text-slate-600">
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

export default SingleBlog;
