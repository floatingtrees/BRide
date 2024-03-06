"use client";
import React from "react";
import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { cn } from "./utils/cn";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

import { IconBrandGoogle } from "@tabler/icons-react";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div class="flex items-center justify-center h-screen w-full bg-[url('https://media.nbclosangeles.com/2022/01/107003183-1642607336012-gettyimages-1236648722-873689_LA-ME-UCLA-FACULTY-STRIKE_16_ALS.jpeg?quality=85&strip=all&resize=1200%2C675')] bg-no-repeat bg-cover">
        <div className="backdrop-blur-sm max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
          <h2 className="font-bold text-xl text-[#2774AE] dark:text-[#2774AE]">
            Welcome to BRide.
          </h2>
          <form className="my-8 bg-white rounded" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="eggert@cs.ucla.edu"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </LabelInputContainer>
            <button
              className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
              type="submit"
            >
              Log In&rarr;
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <Link to="/signup">
                {" "}
                <button
                  className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input bg-white hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                  type="submit"
                >
                  <LuLogIn />
                  <span className="text-black text-sm">Sign Up</span>
                </button>
              </Link>
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input bg-white hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-black" />
                <span className="text-black text-sm">Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
