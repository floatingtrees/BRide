import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SearchResult from "./SearchResult.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Search" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
