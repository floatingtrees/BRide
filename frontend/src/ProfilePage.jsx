import {React, useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { cn } from "./utils/cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/Accordion";

function ProfilePage() {
    const loggedIn = window.localStorage.getItem("isLoggedIn");

    function UserProfile() {
        return(
            <>
                <div className="backdrop-blur-sm  w-full mx-auto rounded-2xl p-4 md:p-8  bg-white">
                  <h1 className="py-8 font-bold text-4xl text-[#2774AE] dark:text-[#2774AE]">
                    Your Reservations
                  </h1>
                </div>
            </>
        );
    }

    function UserReservations() {
        return (
            <>
                <div className="backdrop-blur-sm w-full mx-auto rounded-2xl p-4 md:p-8  bg-white">
                  <h1 className="py-8 font-bold text-4xl text-[#2774AE] dark:text-[#2774AE]">FAQs</h1>
                  
                  
                </div>
            </>
        );
    }
    
    return (loggedIn ? (
        <>
            <Navbar />
            <div className="w-full py-32 px-4">
              <div className="mx-auto grid md:grid-cols-2 sm:grid-col-1 gap-48 px-48">
                <UserProfile />
                <UserReservations />
              </div>
            </div>
            <Footer />
        </>
    ): "");
}

const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

export default ProfilePage;