import last from "../assets/Last.gif";
import React, { useState } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const ContactInfo = () => {
  const handleSubmit = async (e) => {};

  return (
    <div className="w-full py-32 px-4">
      <div className="mx-auto grid md:grid-cols-2 sm:grid-col-1 gap-48 px-48">
        <div className="backdrop-blur-sm  w-full mx-auto rounded-2xl p-4 md:p-8  bg-white">
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
        <div className="backdrop-blur-sm w-full mx-auto rounded-2xl p-4 md:p-8  bg-white text-[#2774AE]">
          <h1 className="py-4 font-bold text-4xl">FAQs</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it legit?</AccordionTrigger>
              <AccordionContent className="text-black">
                Yes! Trust your fellow students and scooters! You will be
                guaranteed to get to class safely!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I make sure I won't get hurt?
              </AccordionTrigger>
              <AccordionContent className="text-black">
                "I find your lack of faith disturbing." - Darth Vader
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How is this website so SEXY? How did you guys do it?
              </AccordionTrigger>
              <AccordionContent className="text-black">
                It's worth 30% of our CS35L grade and we did bad on our
                midterms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Who does the contact us email get sent to? Will it get answered?
              </AccordionTrigger>
              <AccordionContent className="text-black">
                It is sent to Professor Paul Eggert. You will most likely get a
                angry response to stop emailing him.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
