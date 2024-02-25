import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#2774AE] md:text-2xl sm:text-xl font-bold">
          Never be late again
        </p>
        <h1 className="md:text-7xl sm:tetx-6xl text-4xl font-bold md:py-6">
          Bruin to Bruin Scooters.
        </h1>
        <div>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            I'm running late to{" "}
            <ReactTyped
              strings={["CS35L lecture", "a date with Eggert", "physics lab"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
