import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Typography from "@mui/material/Typography";
import { cn } from "./utils/cn";

function ProfilePage() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  useEffect(() => {
    const response = fetch("http://localhost:8000/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: window.localStorage.getItem("email") }),
    }) // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  function DisplayReservation(props) {
    return (
      <>
        <div className="mb-4 rounded-lg border-blue-500 border-opacity-50 border-opacity-50 bg-blue-100 p-4 text-lg shadow-lg">
          <b className="flex justify-center">Reservation {props.res}</b>
          <h1 className="flex justify-center">
            Destination:&ensp;<b>{props.dest}</b>
          </h1>
          <h1 className="flex justify-center">
            Date:&ensp;<b>{props.date}</b>
          </h1>
          <h1 className="flex justify-center">
            Time:&ensp;<b>{props.time}</b>
          </h1>
        </div>
      </>
    );
  }
  function UserReservations() {
    return (
      <>
        <div className="mx-auto w-full min-w-max rounded-2xl bg-white p-4 backdrop-blur-sm  md:p-8">
          <h1 className="py-8 text-4xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            Reservations
          </h1>
          <DisplayReservation
            res={1}
            dest={"bruh"}
            date={"with micky mouse"}
            time={"golden hour"}
          />
          <DisplayReservation
            res={1}
            dest={"bruh"}
            date={"with micky mouse"}
            time={"golden hour"}
          />
        </div>
      </>
    );
  }

  function getInfo(email, password) {}

  function UserProfile() {
    //find all reservations given the input query of username (password???)
    const email = window.localStorage.getItem("email");
    const password = window.localStorage.getItem("password");
    const name = "Stanley Yelnets";
    const info = getInfo(email, password);

    return (
      <>
        <div className="mx-auto w-full rounded-2xl bg-white p-4 backdrop-blur-sm  md:p-8">
          <h1 className="py-8 text-4xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            User Profile
          </h1>
          <h2 className="text-2xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            Name
          </h2>
          <h2 className="px-2 text-xl font-bold">
            <span>&#8594;</span>
            <span>&ensp;</span>
            {name}
          </h2>
          <br />
          <h2 className="text-2xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            Email Address
          </h2>
          <h2 className="px-2 text-lg font-bold">
            <span>&#8594;</span>
            <span>&ensp;</span>
            {email}
          </h2>
          <br />
          <h2 className="text-2xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            Password
          </h2>
          <h2 className="px-2 text-lg font-bold">
            <span>&#8594;</span>
            <span>&ensp;</span>
            {password}
          </h2>
          <br />
          {/*if we have time
                    <a className="underline cursor-pointer font-bold text-[#2774AE] dark:text-[#2774AE]">Edit Your Profile</a> */}
        </div>
      </>
    );
  }

  return loggedIn ? (
    <>
      <div className="w-full px-4 py-32">
        <div className="sm:grid-col-1 mx-auto grid gap-48 px-48 md:grid-cols-2">
          <UserReservations />
          <UserProfile />
        </div>
      </div>
      <Navbar />
      <Footer />
    </>
  ) : (
    ""
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ProfilePage;
