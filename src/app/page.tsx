"use client";
import React from "react";
import Login from "./(main)/login/page";
import { useGetPostsQuery } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const Page = () => {
  const { data } = useGetPostsQuery(undefined);
  console.log(data, "jsonplaceholder data");
  return (
    <div>
      <Login />
      <button
        onClick={() => toast.success("Dashboard updated successfully!")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Show Toast
      </button>
    </div>
  );
};

export default Page;
