import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#8BB8E8] rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center ">
          © 2024{" "}
          <a
            href="https://samueli.ucla.edu/people/paul-eggert/"
            className="hover:underline"
          >
            BRide.™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
