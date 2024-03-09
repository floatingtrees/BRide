import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import img from "../assets/Card.jpg";

function ResultCard(props) {
  return (
    <>
      <Grid item xs={12} sm={4} ms={4} className="relative">
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
              image={img}
              alt="green iguana"
            />
            <CardContent>
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
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default ResultCard;
