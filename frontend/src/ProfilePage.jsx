import {React, useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Typography from "@mui/material/Typography";
import { cn } from "./utils/cn";

function ProfilePage() {
    const loggedIn = window.localStorage.getItem("isLoggedIn");

    function DisplayReservation(props) {
        return (
            <>
                <div className="text-lg p-4 mb-4 border-blue-500 rounded-lg bg-blue-100 border-opacity-50 border-opacity-50 shadow-lg">
                    <b className="flex justify-center">Reservation {props.res}</b>
                    <h1 className="flex justify-center">Destination:&ensp;<b>{props.dest}</b></h1>
                    <h1 className="flex justify-center">Date:&ensp;<b>{props.date}</b></h1>
                    <h1 className="flex justify-center">Time:&ensp;<b>{props.time}</b></h1>
                  </div>
            </>
        );
    }
    function UserReservations() {
        return(
            <>
                <div className="backdrop-blur-sm  w-full mx-auto rounded-2xl p-4 md:p-8  bg-white">
                  <h1 className="py-8 font-bold text-4xl text-[#2774AE] dark:text-[#2774AE]">
                    Reservations
                  </h1>
                  <DisplayReservation res={1} dest={"bruh"} date={"with micky mouse"} time={"golden hour"} />
                  <DisplayReservation res={1} dest={"bruh"} date={"with micky mouse"} time={"golden hour"} />
                </div>
            </>
        );
    } 

    function getInfo(email, password) {
    }

    function UserProfile() {
        //find all reservations given the input query of username (password???)
        const email = window.localStorage.getItem("email");
        const password = window.localStorage.getItem("password");
        const name = "Stanley Yelnets";
        const info = getInfo(email, password);

        return (
            <>
                <div className="backdrop-blur-sm w-full mx-auto rounded-2xl p-4 md:p-8  bg-white">
                  <h1 className="py-8 font-bold text-4xl text-[#2774AE] dark:text-[#2774AE]">User Profile</h1>
                    <h2 className="font-bold text-2xl text-[#2774AE] dark:text-[#2774AE]">Name</h2>
                    <h2 className="font-bold text-xl px-2"><span>&#8594;</span><span>&ensp;</span>{name}</h2>
                    <br />
                    <h2 className="font-bold text-2xl text-[#2774AE] dark:text-[#2774AE]">Email Address</h2>
                    <h2 className="font-bold text-lg px-2"><span>&#8594;</span><span>&ensp;</span>{email}</h2>
                    <br />
                    <h2 className="font-bold text-2xl text-[#2774AE] dark:text-[#2774AE]">Password</h2>
                    <h2 className="font-bold text-lg px-2"><span>&#8594;</span><span>&ensp;</span>{password}</h2>
                    <br />
                    {/*if we have time
                    <a className="underline cursor-pointer font-bold text-[#2774AE] dark:text-[#2774AE]">Edit Your Profile</a> */}
                </div>
            </>
        );
    }
    
    return (loggedIn ? (
        <>
            <Navbar />
            <div className="w-full py-32 px-4">
              <div className="mx-auto grid md:grid-cols-2 sm:grid-col-1 gap-48 px-48">
                <UserReservations />
                <UserProfile />
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