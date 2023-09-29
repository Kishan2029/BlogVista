// "use client";
import Image from "next/image";
import React from "react";
import coverImage from "../../public/images/demo1.jpeg";
import Link from "next/link";
import { stringConcat } from "@/util/helper";

const BlogRow = ({ title, time, author, summary, blogId }) => {
  // const width = window.innerWidth;
  return (
    <div className="flex flex-col space-y-4 cursor-pointer sm:flex-row sm:space-y-0  sm:space-x-10">
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
          <div className="text-3xl font-medium hidden lg:block">
            {stringConcat(title, 64)}
          </div>
          <div className="text-2xl font-medium hidden sm:block lg:hidden">
            {stringConcat(title, 42)}
          </div>
          <div className="text-2xl font-medium sm:hidden">
            {stringConcat(title, 30)}
          </div>
          <div className="flex gap-x-6 mt-6 mb-6">
            <div className="text-sm font-blod">{author}</div>
            <div className="text-sm font-light">{time}</div>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-light leading-loose hidden lg:block">
              {stringConcat(summary, 350)}
            </div>
            <div className="text-sm font-light leading-loose hidden sm:block lg:hidden">
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
