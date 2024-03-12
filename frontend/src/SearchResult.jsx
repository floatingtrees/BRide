import * as React from "react";
import img from "./assets/Card.jpg";
import default_img from "./assets/default_card.jpg";
import Navbar from "./components/Navbar";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";

function SearchResultPage() {
  const location = useLocation();
  console.log(window.localStorage.getItem("query_result_start").start);
  const { start, end, date, time } = location.state;
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
            <ResultCard name="New Scooter!!!" img={default_img} />
            <ResultCard
              name={
                window.localStorage.getItem("query_result_orderer_username")
                  .username
              }
              location={window.localStorage.getItem("query_result_start").start}
              time={window.localStorage.getItem("query_result_time").time}
              img={img}
            />
            <ResultCard
              name="Bob John"
              location="De Neve Plaza"
              time="10:10 AM"
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
