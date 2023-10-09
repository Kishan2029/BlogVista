// "use client";
import Image from "next/image";
import React from "react";
import coverImage from "../../public/images/demo1.jpeg";
import Link from "next/link";
import { stringConcat } from "@/util/helper";

const BlogRow = ({ title, time, author, summary, blogId }) => {
  // const width = window.innerWidth;
  return (
    <div className="flex cursor-pointer flex-col space-y-4 sm:flex-row sm:space-x-10  sm:space-y-0">
      <div className="basis-2/5">
        <Link href={`/blog/${blogId}`}>
          <Image
            src={coverImage}
            alt="cover image"
            // height={400}
            style={{ objectFit: "cover", height: "260px", width: "100%" }}
            priority={true}
          />
        </Link>
      </div>
      <div className="basis-3/5">
        <Link href={`/blog/${blogId}`}>
          <div className="hidden text-3xl font-medium lg:block">
            {stringConcat(title, 64)}
          </div>
          <div className="hidden text-2xl font-medium sm:block lg:hidden">
            {stringConcat(title, 42)}
          </div>
          <div className="text-2xl font-medium sm:hidden">
            {stringConcat(title, 30)}
          </div>
          <div className="mb-6 mt-6 flex gap-x-6">
            <div className="font-blod text-sm">{author}</div>
            <div className="text-sm font-light">{time}</div>
          </div>
          <div className="hidden sm:block">
            <div className="hidden text-sm font-light leading-loose lg:block">
              {stringConcat(summary, 350)}
            </div>
            <div className="hidden text-sm font-light leading-loose sm:block lg:hidden">
              {stringConcat(summary, 200)}
            </div>
            <div className="text-sm font-light leading-loose sm:hidden">
              {stringConcat(summary, 100)}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogRow;
