import { React, useState } from "react";
import backSeatImage from "./assets/backSeat.jpg";
import frontSeatImage from "./assets/frontSeat.jpg";
import Navbar from "./components/Navbar";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

function ScooterCreatePage(prop) {
  const [frontBack, setFrontBack] = useState("Front Seat");
  const [seatImage, setSeatImage] = useState(frontSeatImage);
  const navigate = useNavigate();

  function toggleChangeSeat() {
    if (frontBack == "Front Seat") {
      setFrontBack("Back Seat");
      setSeatImage(backSeatImage);
    } else {
      setFrontBack("Front Seat");
      setSeatImage(frontSeatImage);
    }
  }

  const handleSubmit = async (e) => {
    if (!window.localStorage.getItem("isLoggedIn")) {
      toast.error("Ooops! You cannot create a BRide without logging in!");
      return;
    }
    e.preventDefault();

    const response = await fetch("http://localhost:8000/confirm/selection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startLocation: window.localStorage.getItem("startLocation"),
        endLocation: window.localStorage.getItem("endLocation"),
        time: window.localStorage.getItem("time"),
        username: window.localStorage.getItem("email"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "True") {
        }
      });
    toast.success(
      "Your ride has successfully been created! Check your email for more info!",
    );
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full flex-row items-center justify-center px-4">
        <div className="mx-auto grid flex-shrink-0 gap-48 px-96 sm:grid-cols-1 md:grid-cols-2">
          <figure className="max-w-lg ">
            <img
              className="h-auto max-w-full rounded-lg"
              src={seatImage}
              alt="scooter"
            />
          </figure>
          <div className="flex flex-row items-center justify-center">
            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                value=""
                className="peer sr-only"
                onClick={toggleChangeSeat}
              />
              <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ms-3 text-sm font-bold text-[#2774AE]">
                {frontBack}
              </span>
            </label>
            <div className="flex content-center items-center justify-center px-12">
              <button
                className="group/btn btn mt-3.5 h-10 overflow-hidden rounded-xl bg-[#2774AE] px-4 font-bold uppercase text-white duration-300 hover:-translate-y-2 hover:shadow-lg"
                type="submit"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScooterCreatePage;
