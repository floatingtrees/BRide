import React from "react";
import scooter from "../assets/Scooter.gif";

const About = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={scooter}
          alt="scooter"
        ></img>
        <div className="flex flex-col justify-center">
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
      </div>
    </div>
  );
};

export default About;
