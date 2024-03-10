import React from "react";
import scooter from "../assets/first.png";

const About = () => {
  const paragraphStyle = {
    caretColor: 'transparent',
  };
  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={scooter}
          alt="scooter"
        ></img>
        <div className="flex flex-col justify-center">
          <p className=" uppercase font-bold"style={paragraphStyle}>Share Scooter Rides!</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2" style={paragraphStyle}>
            Want to arrive to class within minutes?
          </h1>
          <p style={paragraphStyle}>
            Never have to run to class again. Have you ever left your room knowing you won't make it to class on time, not wanting to pay the steep price of a scooter? BRide allows you
            to share a scooter with another student running late to class, cutting costs and giving you a scooter buddy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
