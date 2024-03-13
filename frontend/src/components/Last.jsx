import React from "react";
import last from "../assets/dowg.gif";

const Last = () => {
  const paragraphStyle = {
    caretColor: 'transparent',
    maxWidth: "70%",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  };
  
  const headingStyle = {
    caretColor: 'transparent',
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };
  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={last} alt="last"></img>
        <div className="flex flex-col justify-center">
          <p className=" uppercase font-bold" style={paragraphStyle}>final steps</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2"
          style={headingStyle}
          >
            Hold on tight!
          </h1>
          <p className="" style={paragraphStyle}>
            When a match is found, meet at your departure location when the time comes. Make sure you meet the person you matched with, and take the scooter ride to your destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last;
