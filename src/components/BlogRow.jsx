import Image from "next/image";
import React from "react";
import coverImage from "../../public/images/demo1.jpeg";
import Link from "next/link";

const BlogRow = ({ title, time, author, summary, blogId }) => {
  return (
    // <Link href="/blog/2">
    <div className="flex gap-x-10 cursor-pointer">
      <div className="basis-2/5">
        <Link href={`/blog/${blogId}`}>
          <Image
            src={coverImage}
            alt="cover image"
            // height={400}
            style={{ objectFit: "cover", height: "260px", width: "100%" }}
          />
        </Link>
      </div>
      <div className="basis-3/5">
        {/* <div className=""> */}
        <Link href={`/blog/${blogId}`}>
          <div className="text-3xl font-medium">{title}</div>
          <div className="flex gap-x-6 mt-6 mb-6">
            <div className="text-sm font-blod">{author}</div>
            <div className="text-sm font-light">{time}</div>
          </div>
          <div className="text-sm font-light leading-loose">{summary}</div>
        </Link>
      </div>
    </div>
  );
};

export default BlogRow;
