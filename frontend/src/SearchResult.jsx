import * as React from "react";
import img from "./assets/Card.jpg";
import default_img from "./assets/default_card.jpg";
import Navbar from "./components/Navbar";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";
import { useEffect, useState } from "react";

function SearchResultPage() {
  const [date, setDate] = useState(
    window.localStorage.getItem("query_result_time").slice(0, -5),
  );
  const [time, setTime] = useState(
    window.localStorage.getItem("query_result_time").slice(0, -5),
  );
  const [username, setUsername] = useState(
    window.localStorage.getItem("query_result_orderer_username"),
  );
  const [start, setStart] = useState(
    window.localStorage.getItem("query_result_start"),
  );
  const [end, setEnd] = useState(
    window.localStorage.getItem("query_result_end"),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(window.localStorage.getItem("query_result_time").slice(-5));
      setDate(window.localStorage.getItem("query_result_time").slice(0, -5));
      setUsername(window.localStorage.getItem("query_result_orderer_username"));
      setStart(window.localStorage.getItem("query_result_start"));
      setEnd(window.localStorage.getItem("query_result_end"));
    }, 1000); // 1000 milliseconds = 1 second
  }, []);
  // have the start/end/date/time information here

  return (
    <>
      <div className="pt-24">
        <Searchbar />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            style={{ marginTop: "-15px" }}
            columns={16}
          >
            <ResultCard name="New Scooter!" img={default_img} />
            <ResultCard
              name={window.localStorage.getItem(
                "query_result_orderer_username",
              )}
              start={start}
              end={end}
              date={date}
              time={time}
              img={img}
            />
          </Grid>
        </Container>
      </div>
      <Navbar />
    </>
  );
}

export default SearchResultPage;
