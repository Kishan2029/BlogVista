import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between align-between items-center mb-8">
      <Link href="/">
        <div className="text-3xl font-bold">BlogVista</div>
      </Link>
      <div className="flex space-x-12">
        <Link href="/createBlog">
          <div>Create new blog</div>
        </Link>
        <Link href="/login">
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
