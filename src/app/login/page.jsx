"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Login = () => {
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
    <div className="mt-80 flex items-center justify-center sm:mt-52">
      <button
        className="flex h-12 items-center space-x-2 rounded-md bg-gray-600 px-4 py-2 text-base text-white"
        onClick={login}
      >
        <FcGoogle style={{ fontSize: "2rem" }} />

        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
