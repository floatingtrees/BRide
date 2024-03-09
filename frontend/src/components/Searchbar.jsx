import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/cn";

function Searchbar() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
     
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    console.log(timeRegex)

    // Allow empty value to let user clear the input or type from scratch
    if (!timeRegex.test(time)) {
      alert("Time must be in the format of HH:MM, such as 09:30")
      return;

    }
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    console.log(dateRegex)

    // Allow empty value to let user clear the input or type from scratch
    if (!dateRegex.test(date)) {
      alert("Time must be in the format of HH:MM, such as 09:30")
      return;

    }
    console.log(date + time)
    const response = await fetch("http://localhost:8000/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'startLocation': start, 'endLocation': end, 'time': date + time}),
      })
    .then(response => response.json())
    .then(data => {
      if (data.success == 'True') {
      const sign = true;
      console.log(sign)
      }
      else {
        const sign = false;
        console.log(sign)
      }
      console.log(data)
      
    })

  };

  return (
    <>
      <div className="flex justify-center items-center h-24 max-w-[1240px] px-6 mx-auto rounded-2xl p-4 my-4 bg-white">
        <form className="bg-white rounded" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-2">
          <LabelInputContainer>
              <Label htmlFor="firstname">Arrival Location</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="start"
                placeholder="Haines Hall 39"
                type="text"
                onChange={(e) => setStart(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="firstname">Departure Location</Label>
              <Input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="end"
                placeholder="Epicura at Ackerman"
                type="text"
                onChange={(e) => setEnd(e.target.value)}
              />
            </LabelInputContainer>
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
                maxLength="5"
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
