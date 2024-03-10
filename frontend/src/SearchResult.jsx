import * as React from "react";

import Navbar from "./components/Navbar";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";

function SearchResultPage() {
  const location = useLocation();
  const { date, time, carpool } = location.state;

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
      <div className="pt-24">
        <Searchbar />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            style={{ marginTop: "20px" }}
            columns={16}
          >
            <ResultCard
              name="Bob John"
              location="De Neve Plaza"
              time="10:10 AM"
            />
            <ResultCard
              name="Bob John"
              location="De Neve Plaza"
              time="10:10 AM"
            />
            <ResultCard
              name="Bob John"
              location="De Neve Plaza"
              time="10:10 AM"
            />
          </Grid>
        </Container>
      </div>
      <Navbar />
    </>
  );
}

export default SearchResultPage;
