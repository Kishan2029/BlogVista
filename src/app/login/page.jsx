"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const login = () => {
  const { data, status } = useSession();

  const router = useRouter();

  const login = () => {
    signIn("google");
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div className="flex justify-center mt-52">
      <button
        className="flex items-center space-x-2 bg-gray-600 py-2 px-4 rounded-md text-white text-base"
        onClick={login}
      >
        <FcGoogle style={{ fontSize: "2rem" }} />

        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default login;
