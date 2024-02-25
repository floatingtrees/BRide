import { useState } from 'react'

function SearchResult() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState([Array(3).fill(null)]);
  
  function SearchElement(props) {
    return (
      <button onClick={() => {setCount((count) => count + 1); console.log(count);}}>
        <div>car id: {props.id}</div>
        <div>car leave time:{props.time}</div>
        <div>car destination:{props.destination}</div>
      </button>
    );
  }

  return (
    <>
      <h1>Hello, Here are Your Search Results!</h1>
      <SearchElement id={123} time={"4:5:3"} destination={"UCLA"} />
      <SearchElement id={123} time={"4:5:3"} destination={"UCLA"} />     
      <div className="card">
        <p>
          the current count is: {count}
        </p>
      </div>
    </>
  )
}

export default SearchResult;
