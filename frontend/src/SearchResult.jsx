import { useState } from "react";
import Navbar from "./components/Navbar";
import { useLocation , Link} from "react-router-dom";

function SearchResultPage() {
  const location = useLocation();
  const {date, time, carpool} = location.state;
  const [count, setCount] = useState(0);

  function SearchElement() {
    return (
      <button
        onClick={() => {
          setCount((count) => count + 1);
          console.log(count);
        }}
      >
        <div>car date: {date}</div>
        <div>car time:{time}</div>
        <div>car carpool number:{carpool}</div>       
      </button>
    );
  }

  return (
    <>
      <Navbar />
      <h1>Hello, Here are Your Search Results!</h1>
      <SearchElement id={123} time={"4:5:3"} destination={"UCLA"} />
      <SearchElement id={123} time={"4:5:3"} destination={"UCLA"} />
      <div className="card">
        <p>the current count is: {count}</p>
      </div>
    </>
  );
}

export default SearchResultPage;
