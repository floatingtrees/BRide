import last from "../assets/Last.gif";
import React, { useState } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/cn";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const handleSubmit = async (e) => {};

  return (
    <div className="w-full py-32 px-4">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="backdrop-blur-sm max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white">
          <h2 className="font-bold text-xl text-[#2774AE] dark:text-[#2774AE]">
            Have a question? Contact us!
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
              <Label htmlFor="password">Question? Concerns? Comments?</Label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question"
                type="question"
                placeholder="Why do I want to switch majors? I don't want to do CS anymore"
              />
            </LabelInputContainer>

            <button
              className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="pt-24">
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              style={{ marginTop: "-15px" }}
              columns={4}
            ></Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
