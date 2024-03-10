import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [loggedInText, setLoggedIn] = useState("Login");
  const navigate = useNavigate();

  //check logged-in status
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  if (loggedInText === "Login" && loggedIn) {
    setLoggedIn("Logout");
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    if(loggedInText === "Login") {
      navigate('/login');
    }
    else {
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("password");
      setLoggedIn("Login");
      navigate('/');
    }
  };

  return (
    <div className="flex justify-between items-center h-24  mx-auto px-6 text-[#2774AE] shadow-md fixed top-0 w-full bg-white">
      <h1 className="w-full text-3xl font-bold text-[#2774AE] m-4">
        <Link to="/">BRide.</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">Contact</li>
        <li className="p-4">
          <button onClick={handleClick}>{loggedInText}</button>
          {/* <Link to="/login">Login</Link> */}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <MdClose size={20} /> : <RiMenu4Line size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-transparent bg-gray-200 ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#2774AE] m-4">
          <Link to="/">BRide.</Link>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">Contact</li>
          <li className="p-4 border-b">
            <button onClick={handleClick}>{loggedInText}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
