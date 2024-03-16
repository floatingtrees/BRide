import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";

function Contact() {
  return (
    <>
      <div>
        <ContactInfo />
        <Footer />
        <Navbar />
      </div>
    </>
  );
}

export default Contact;
