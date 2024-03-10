import React from "react";
import use from "../assets/Use.gif";

const HowTo = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#8BB8E8]">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center pl-12">
          <p className=" uppercase font-bold">Share Scooter Rides!</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2">
            Cock and Balls
          </h1>
          <p className="">
            i love cock oh boy i love cocks i love cock oh boy i love cocks i
            love cock oh boy i love cocks i love cock oh boy i love cocks i love
            cock oh boy i love cocks i love cock oh boy i love cocks i love cock
            oh boy i love cocks i love cock oh boy i love cocks
          </p>
        </div>
        <img className="w-[500px] mx-auto my-4" src={use} alt="use"></img>
      </div>
    </div>
  );
};

export default HowTo;
