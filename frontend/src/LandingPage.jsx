import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import { TracingBeam } from "./components/TracingBeamScroll";

function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Searchbar />
      </div>
    </>
  );
}

export default LandingPage;
