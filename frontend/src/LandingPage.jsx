import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
import HowTo from "./components/HowTo";

function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Searchbar />
        <About />
        <HowTo />
      </div>
    </>
  );
}

export default LandingPage;
