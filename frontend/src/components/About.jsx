import React from "react";
import map from "../assets/first.png";

const About = () => {
  const paragraphStyle = {
    caretColor: "transparent",
    maxWidth: "70%",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  };

  const headingStyle = {
    caretColor: "transparent",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  return (
    <div className="w-full bg-[#8BB8E8] px-4 py-16 text-black">
      <div className="mx-auto grid md:grid-cols-2 gap-8">
        <img
          className="w-[500px] mx-auto my-4 rounded-2xl shadow-xl"
          src={map}
          alt="map"
        ></img>
        <div className="flex flex-col justify-center">
          <p className=" uppercase font-bold" style={paragraphStyle}>
            In a rush?
          </p>
          <h1
            className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2"
            style={headingStyle}
          >
            Arrive to class within minutes!
          </h1>
          <p style={paragraphStyle}>
            Never have to run to class again. Have you ever left your room
            knowing you won't make it to class on time, not wanting to pay the
            steep price of a scooter? BRide allows you to share a scooter with
            another student running late to class, cutting costs in half.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
