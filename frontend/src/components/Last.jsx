import React from "react";
import last from "../assets/dowg.gif";

const Last = () => {
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
          src={last}
          alt="last"
        ></img>
        <div className="flex flex-col justify-center">
          <p className=" uppercase font-bold" style={paragraphStyle}>
            final steps
          </p>
          <h1
            className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2"
            style={headingStyle}
          >
            Hold on tight!
          </h1>
          <p className="" style={paragraphStyle}>
            When a match is found, meet at your departure location stated in the
            email notification when the time comes. Make sure you meet the
            person you matched with, and take the scooter ride to your
            destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last;
