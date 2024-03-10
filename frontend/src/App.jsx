import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SearchResultPage from "./SearchResult.jsx";
import LoginPage from "./Login.jsx";
import SignUpPage from "./Signup.jsx";
import ScooterSelectPage from "./ScooterSelect.jsx";
import Contact from "./Contact.jsx";
import { Toaster, toast } from "sonner";
import ProfilePage from "./ProfilePage.jsx";

function App() {
  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/select" element={<ScooterSelectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
