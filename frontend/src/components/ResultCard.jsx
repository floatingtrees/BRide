import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";

function ResultCard(props) {
  const bookRide = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/book/ride", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startLocation: start,
        endLocation: end,
        time: date + time,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "True") {
          console.log(data.success);
        }
      });
  };

  function GetCardContent() {
    if (props.name === "New Scooter!") {
      return (
        <>
          <br />
          <Typography variant="body" color="text.secondary">
            <b>Create a new ride!</b>
            <br />
            <b>Share with someone!</b>
            <br />
          </Typography>
          <br />
        </>
      );
    }
    return (
      <>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join {props.name}'s Ride!
          <br />
          <b> Start: </b>
          {props.start}
          <br />
          <b> Destination: </b>
          {props.end}
          <br />
          <b> Date: </b>
          {props.date}
          <br />
          <b>Time: </b>
          {props.time}
        </Typography>
      </>
    );
  }
  if(props.name === "undefined") {
    return null;
  }
  return (
    <>
      <Grid item xs={12} sm={4} ms={4} className="relative">
        <Link to="/select">
          <Card
            sx={{ maxWidth: 345, height: 425 }}
            style={{
              padding: "10xp",
              marginBottom: "30px",
              borderRadius: "20px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ maxHeight: 250 }}
                image={props.img}
                alt="img"
              />
              <CardContent>
                <GetCardContent />
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </>
  );
}

export default ResultCard;
