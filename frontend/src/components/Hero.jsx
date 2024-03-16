import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const noCaret = {
    caretColor: 'transparent',
  };
  return (
    <div style={noCaret} className="text-white mx-auto overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('https://www.eazywallz.com/cdn/shop/products/Blue-Sky-Clouds-Wallpaper-Mural_2a23bea6-7559-405b-92aa-d338d467d0da.jpg?v=1628807775')]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md:text-2xl sm:text-xl font-bold">Never be late again</p>
        <h1 className="text-[#FFC72C] md:text-7xl sm:tetx-6xl text-4xl font-bold md:py-6 italic">
          Bruin to Bruin Scooters.
        </h1>
        <div>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 py-4">
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
