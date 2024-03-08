import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { useLocation , Link} from "react-router-dom";

function SearchResultPage() {
  const location = useLocation();
  const {date, time, carpool} = location.state;

  function SearchElement() {
    return (
      <button>
        <div>car date: {date}</div>
        <div>car time:{time}</div>      
      </button>
    );
  }

  return (
    <>
      <Navbar />
      <Searchbar />
      <h1>Hello, Here are Your Search Results!</h1>
      <SearchElement />
      <SearchElement />
    </>
  );
}

export default SearchResultPage;
