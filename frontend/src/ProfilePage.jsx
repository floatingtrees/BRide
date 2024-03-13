import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cn } from "./utils/cn";

function ProfilePage() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const [reservations, setReservations] = useState([]);

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
        setReservations(data);
      });
  }, []);

  for (let i = 0; i < reservations.length; i++) {
    reservations[i].id = i+1;
  }
  function DisplayReservation({resv}) {
    return (
      <>
        <div className="mb-4 rounded-lg border-blue-500 border-opacity-50 bg-blue-100 p-4 text-lg shadow-lg">
          <b className="flex justify-center">Reservation {resv.id}</b>
          <h1 className="flex justify-center">
            Start:&ensp;<b>{resv.startLocation}</b>
          </h1>
          <h1 className="flex justify-center">
            Destination:&ensp;<b>{resv.endLocation}</b>
          </h1>
          <h1 className="flex justify-center">
            Date:&ensp;<b>{resv.time.replace(/\n/g, '').slice(0,-5)}</b>
          </h1>
          <h1 className="flex justify-center">
            Time:&ensp;<b>{resv.time.replace(/\n/g, '').slice(-5)}</b>
          </h1>
        </div>
      </>
    );
  }
  function UserReservations() {

    const listReservations = reservations.map((resv) => <DisplayReservation key={resv.id} resv={resv} />);

    return (
      <>
        <div className="mx-auto w-full min-w-max rounded-2xl bg-white p-4 backdrop-blur-sm  md:p-8">
          <h1 className="py-8 text-4xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            Reservations
          </h1>
          {listReservations}
        </div>
      </>
    );
  }

  function UserProfile() {
    //find all reservations given the input query of username (password???)
    const email = window.localStorage.getItem("email");
    const password = window.localStorage.getItem("password");

    return (
      <>
        <div className="mx-auto w-full rounded-2xl bg-white p-4 backdrop-blur-sm  md:p-8">
          <h1 className="py-8 text-4xl font-bold text-[#2774AE] dark:text-[#2774AE]">
            User Profile
          </h1>
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
          <br />
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

export default ProfilePage;
