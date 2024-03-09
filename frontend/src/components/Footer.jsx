import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-[#8BB8E8] rounded-lg shadow m-4 ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-white sm:text-center ">
          © 2024{" "}
          <a
            href="https://samueli.ucla.edu/people/paul-eggert/"
            class="hover:underline"
          >
            BRide.™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a class="hover:underline me-4 md:me-6">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
