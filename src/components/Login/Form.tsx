"use client";
import React from "react";
import { Button } from "../ui/button";

const LoginForm = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Hello world", email, password);
  };
  return (
    <div className="w-full bg-white font-Robot">
      <div className="flex items-center justify-center h-screen p-3">
        <div className="w-full max-w-md space-y-10">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center text-[var(--color-secondary)]">
            Admin Login
          </h1>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="flex flex-col space-y-3">
              <label className="text-sm sm:text-[17px] text-[var(--color-textPrimary)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your mail"
                className="py-2 px-5 sm:py-2.5 sm:px-6 rounded-[12px] border-2"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-sm sm:text-[17px] text-[var(--color-textPrimary)]">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="py-2 px-5 sm:py-2.5 sm:px-6 rounded-[12px] border-2"
              />
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                className="hover:bg-purple-800 cursor-pointer w-full bg-[var(--color-accent)] py-5.5 px-5 sm:px-6 text-sm sm:text-[17px]"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
