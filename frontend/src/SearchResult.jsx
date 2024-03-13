import * as React from "react";
import default_img from "./assets/default_card.jpg";
import Navbar from "./components/Navbar";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";
import { useEffect, useState } from "react";

function SearchResultPage() {
  const location = useLocation();
  const {scooter_queries} = location.state;

  console.log(scooter_queries[1]);

  for (let i = 0; i < scooter_queries.length; i++) {
    scooter_queries[i].id = i+1;
  }
  const default_scooter = {orderer_username:"New Scooter!", img:default_img}
  const DisplayScooters = scooter_queries.map((scooter) => (
      <ResultCard key={scooter.id} scooter={scooter} />
    ));


  return (
    <>
      <div className="pt-24">
        <Searchbar />
        <div className="flex pt-20">
          <Container maxWidth="lg">
            <Grid
              container
              spacing={5}
              style={{ marginTop: "20px" }}
              columns={16}
            >
              <ResultCard scooter={default_scooter} />
              {DisplayScooters}
            </Grid>
          </Container>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default SearchResultPage;
