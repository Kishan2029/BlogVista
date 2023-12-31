"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

import { useSession, signOut } from "next-auth/react";

const Nav = () => {
  const { status } = useSession();
  const router = useRouter();
  return (
    <div className="align-between mb-8 flex items-center justify-between">
      <Link href="/">
        <div className="text-3xl font-bold">BlogVista</div>
      </Link>
      <div className="space-y-2  sm:flex sm:items-center  sm:space-x-12 sm:space-y-0">
        {status === "authenticated" && (
          <Link href="/createBlog">
            <div>Create new blog</div>
          </Link>
        )}
        {status === "authenticated" ? (
          <div
            className="cursor-pointer"
            onClick={async () => {
              signOut({ callbackUrl: "/login" });
            }}
          >
            Logout
          </div>
        ) : (
          <Link href="/login">
            <div className="cursor-pointer">Login</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
