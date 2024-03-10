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
        <h1 className="flex justify-center text-[#0380fc] md:text-7xl sm:tetx-6xl text-4xl font-bold md:py-6">
          Your Search Results
        </h1>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            style={{ marginTop: "-15px" }}
            columns={16}
          >
            <ResultCard
              name="New Scooter!!!"
              img={default_img}
            />
            <ResultCard
              name="Bob John"
              location="De Neve Plaza"
              time="10:10 AM"
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
