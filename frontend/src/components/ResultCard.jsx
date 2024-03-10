import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";

function ResultCard(props) {
  
  function GetCardContent() {

    if(props.name === "New Scooter!!!") {
      return (
        <>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body" color="text.secondary">
            <b>Create a new ride!</b>
            <br />
            <b>Share with someone!</b>
          </Typography>
        </> 
      )
    }
    return (
      <>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join {props.name}'s Ride!
          <br />
          <b>Location: </b>
          {props.location}
          <br />
          <b>Time: </b>
          {props.time}
        </Typography>
      </>
    );

  }

  return (
    <>
      <Grid item xs={12} sm={4} ms={4} className="relative">
        <Link to="/select">
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              padding: "10xp",
              marginBottom: "30px",
              borderRadius: "20px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt="green iguana"
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
