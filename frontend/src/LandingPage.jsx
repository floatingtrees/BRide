import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
import HowTo from "./components/HowTo";
import Last from "./components/Last";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Searchbar />
        <About />
        <HowTo />
        <Last />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
