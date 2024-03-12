import { React, useState } from "react";
import backSeatImage from "./assets/backSeat.jpg";
import frontSeatImage from "./assets/frontSeat.jpg";
import Navbar from "./components/Navbar";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

function ScooterSelectPage(prop) {
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

  function confirmRide() {
    toast.success(
      "Your ride has successfully been booked! Check your email for more info!",
    );
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="w-full px-4 flex flex-row min-h-screen justify-center items-center">
        <div className="mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-48 px-96 flex-shrink-0">
          <figure className="max-w-lg ">
            <img
              className="h-auto max-w-full rounded-lg"
              src={seatImage}
              alt="scooter"
            />
          </figure>
          <div className="flex flex-row justify-center items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={toggleChangeSeat}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-bold text-[#2774AE]">
                {frontBack}
              </span>
            </label>
            <div className="px-12 flex justify-center items-center content-center">
              <button
                className="group/btn btn mt-3.5 px-4 h-10 overflow-hidden rounded-xl bg-[#2774AE] font-bold uppercase text-white duration-300 hover:-translate-y-2 hover:shadow-lg"
                type="submit"
                onClick={confirmRide}
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

export default ScooterSelectPage;
