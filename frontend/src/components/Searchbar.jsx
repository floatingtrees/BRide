import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/cn";

function Searchbar() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  function getSearchResult() {
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const sign = getSearchResult();

    if (sign) {
      const dataToPass = { date: date, time: time };
      navigate("/search", { state: dataToPass });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-24 max-w-[1240px] px-6 mx-auto rounded-2xl p-4 my-4 bg-white">
        <form className="bg-white rounded" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Departure Date</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                placeholder="MM/DD/YYYY"
                type="text"
                onChange={(e) => setDate(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Departure Time</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                placeholder="HH:MM"
                type="text"
                onChange={(e) => setTime(e.target.value)}
              />
            </LabelInputContainer>
            <button
              className="mt-3.5 group/btn w-32 text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase duration-300 hover:-translate-y-2 hover:shadow-md"
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
