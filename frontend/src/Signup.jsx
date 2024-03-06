"use client";
import React, { useState } from "react";
import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { cn } from "./utils/cn";
import { Link } from "react-router-dom";

import { IconBrandGoogle } from "@tabler/icons-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  function ConfirmPasswords() {
    const same = confirmPassword === password;
    if (confirmPassword.length === 0) return;
    if (!same) {
      return <h1>The passwords are not the same!</h1>;
    } else {
      return null;
    }
  }
  const validateCredentials = async (e) => {
    try {
      const response = await fetch("/create/account", {
        method: "POST",
        headers: {
          "Content-Type": "http://localhost:8000/application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (response.ok) {
        console.log("WORKS");
      }
    } catch (error) {
      console.log("broken");
    }

    return;
  };

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
              <Label htmlFor="email">Email Address</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="das@cs.ucla.edu"
                type="email"
              />
            </LabelInputContainer>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  placeholder="David"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  placeholder="Smallberg"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="repassword">Re-Type Password</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="repassword"
                placeholder="••••••••"
                type="repassword"
              />
            </LabelInputContainer>
            <Link to="/login">
              <button
                className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
                type="submit"
              >
                Sign Up
              </button>
            </Link>
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
