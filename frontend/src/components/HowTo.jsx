import React from "react";
import use from "../assets/Use.gif";

const HowTo = () => {
  const paragraphStyle = {
    caretColor: 'transparent',
  };
  return (
    <div className="w-full py-16 px-4 bg-[#8BB8E8]">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center pl-12">
          <p className=" uppercase font-bold" style={paragraphStyle}>How to look for a match?</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2" style={paragraphStyle}>
            Fast and easy!
          </h1>
          <p className="" style={paragraphStyle}>
            Finding a match is simple. If it's your first time using BRide. first create an account using your name email and contract info, then enter your trip and select your spot on the scooter. 
            BRide will notify you as soon as a match is found. 
          </p>
        </div>
        <img className="w-[500px] mx-auto my-4" src={use} alt="use"></img>
      </div>
    </div>
  );
};

export default HowTo;