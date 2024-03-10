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
  const dataToSend = { start: "", end: "", date: "", time: "" };
  const navigate = useNavigate();

  function retrieveData() {
    //if we have multiple queries returned; for later
    // dataToSend.startLocation=data.startLocation;
    // dataToSend.endLocation=data.endLocation;
    // dataToSend.time=data.time.substring(data.time.length - 5);
    // dataToSend.date=data.time.substring(0,data.time.length-5);

    dataToSend.start = start;
    dataToSend.end = end;
    dataToSend.time = time;
    dataToSend.date = date;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    console.log(timeRegex);

    // Allow empty value to let user clear the input or type from scratch
    if (!timeRegex.test(time)) {
      alert("Time must be in the format of HH:MM, such as 09:30");
      return;
    }
    const dateRegex =
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    console.log(dateRegex);

    // Allow empty value to let user clear the input or type from scratch
    if (!dateRegex.test(date)) {
      alert("Date must be a valid date in the format of MM/DD/YYYY, such as 04/01/2024")
      return;
    }
    const response = await fetch("http://localhost:8000/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startLocation: start,
        endLocation: end,
        time: date + time,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "True") {
          retrieveData(data);
        }
        console.log(dataToSend);
      });
    navigate("/search", { state: dataToSend });
  };

  return (
    <>
      <div className="flex justify-center items-center h-24  px-6 mx-auto rounded-2xl p-4 my-4 bg-white w-full">
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
              className="mt-3.5 group/btn w-96 text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase duration-300 hover:-translate-y-2 hover:shadow-lg"
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
