import React from "react";
import use from "../assets/Use.gif";

const HowTo = () => {
  const paragraphStyle = {
    caretColor: 'transparent',
    maxWidth: "70%",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginLeft: "5rem",
  };
  const headingStyle = {
    caretColor: 'transparent',
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginLeft: "5rem",
  };
  
  return (
    <div className="w-full bg-[#8BB8E8] px-4 py-16">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center pl-12">
          <p className=" font-bold uppercase" style={paragraphStyle}>
            How to look for a match?
          </p>
          <h1
            className="fond-bold py-2 text-2xl sm:text-3xl md:text-4xl"
            style={headingStyle}
          >
            Fast and easy!
          </h1>
          <p className="" style={paragraphStyle}>
            Finding a match is simple. If it's your first time using BRide,
            create an account using your name email and contract info, then
            enter your trip and select your spot on the scooter. BRide will
            notify you as soon as a match is found.
          </p>
        </div>
        <img className="mx-auto my-4 w-[500px]" src={use} alt="use"></img>
      </div>
    </div>
  );
};

export default HowTo;
