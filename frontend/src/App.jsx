import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SearchResult from "./SearchResult.jsx";
import LoginPage from "./Login.jsx";
import SignUpPage from "./Signup.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
