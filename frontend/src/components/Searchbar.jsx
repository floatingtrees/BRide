import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/cn";
import { Toaster, toast } from "sonner";

function Searchbar() {
  const noCaret = {
    caretColor: 'transparent',
  };
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    console.log(timeRegex);

    // Allow empty value to let user clear the input or type from scratch
    if (!timeRegex.test(time)) {
      toast.warning(
        "Date must be a valid date in the format of MM/DD/YYYY, such as 04/01/2024",
      );
      return;
    }
    const dateRegex =
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    console.log(dateRegex);

    // Allow empty value to let user clear the input or type from scratch
    if (!dateRegex.test(date)) {
      toast.warning(
        "Date must be a valid date in the format of MM/DD/YYYY, such as 04/01/2024",
      );
      return;
    }
    window.localStorage.setItem("time", date + time);
    window.localStorage.setItem("startLocation", start);
    window.localStorage.setItem("endLocation", end);

    var username_temp = "None";
    if (window.localStorage.getItem("email") != null) {
      username_temp = window.localStorage.getItem("email");
    }
    const response = fetch("http://localhost:8000/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startLocation: start,
        endLocation: end,
        time: date + time,
        username: username_temp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const scooter_queries = data;
        navigate("/search", { state: { scooter_queries } });
      });
  };

  return (
    <>
      <div style={noCaret} className="mx-auto my-4 flex h-24  w-full items-center justify-center rounded-2xl bg-white p-4 px-6">
        <form className="rounded bg-white" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">Departure Location</Label>
              <Input
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="start"
                placeholder="Haines Hall 39"
                type="text"
                onChange={(e) => setStart(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="firstname">Arrival Location</Label>
              <Input
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="end"
                placeholder="Epicura at Ackerman"
                type="text"
                onChange={(e) => setEnd(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="firstname">Departure Date</Label>
              <Input
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="date"
                placeholder="MM/DD/YYYY"
                type="text"
                onChange={(e) => setDate(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Departure Time</Label>
              <Input
                class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="time"
                placeholder="HH:MM"
                maxLength="5"
                type="text"
                onChange={(e) => setTime(e.target.value)}
              />
            </LabelInputContainer>
            <button
              className="group/btn btn mt-3.5 h-10 w-96 overflow-hidden rounded-xl bg-[#2774AE] font-bold uppercase text-white duration-300 hover:-translate-y-2 hover:shadow-lg"
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
    <div className={cn("flex w-full flex-col", className)}>{children}</div>
  );
};

export default Searchbar;
