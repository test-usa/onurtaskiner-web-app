import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#003366]">
      <div className="w-full max-w-md p-8 bg-white ">
        <Link href={"/admin"} className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center">
            --Go Admin Dashboard{" "}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Login;
