import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/cn";

function Searchbar() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [carpool, setCarpool] = useState("");
  // console.log(date);

  function FindMatch() {
    // console.log("you clicked the fucking button!");

    const sign = true;
    if (!sign) {
      return <button> Fuck </button>;
    } else {
      const dataToPass = { date: date, time: time, carpool: carpool };
      // console.log("date into" + date)
      return (
        <Link to="/search" state={dataToPass}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {" "}
            Button{" "}
          </button>
        </Link>
      );
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="w-full mx-auto rounded-2xl p-4 my-4 bg-white">
        <form className="bg-white rounded" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Departure Date</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                placeholder="MM/DD/YYYY"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Departure Time</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                placeholder="HH:MM"
                type="text"
              />
            </LabelInputContainer>
            <button
              className="mt-3.5 relative group/btn w-32 text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-2 transform hover:shadow-md"
              type="submit"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>{children}</div>
  );
};

export default Searchbar;
