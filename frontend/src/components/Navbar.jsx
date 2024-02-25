import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-white">
      <h1 className="w-full text-3xl font-bold text-[#2774AE] m-4">
        BruinShare.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Search</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <MdClose size={20} /> : <RiMenu4Line size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-transparent bg-gray-800 ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#2774AE] m-4">
          BruinShare.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b">Home</li>
          <li className="p-4 border-b">Search</li>
          <li className="p-4 border-b">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
