import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import { TracingBeam } from "./components/TracingBeamScroll";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Hero />
    </div>
  );
}

export default LandingPage;
