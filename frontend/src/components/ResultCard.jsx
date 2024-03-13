import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";

function ResultCard({scooter}) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * images.length),
  );
  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  };
  useEffect(() => changeImage(), []);

  function GetCardContent() {
    if (scooter.orderer_username === "New Scooter!") {
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
          {scooter.orderer_username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join {scooter.orderer_username.replace(/\n/g, '')}'s Ride!
          <br />
          <b> Start: </b>
          {scooter.startLocation}
          <br />
          <b> Destination: </b>
          {scooter.endLocation}
          <br />
          <b> Date: </b>
          {scooter.time.slice(0,-5)}
          <br />
          <b>Time: </b>
          {scooter.time.slice(-5)}
        </Typography>
      </>
    );
  }
  if (!scooter.orderer_username || scooter.orderer_username === "undefined" ||
      scooter.orderer_username.replace(/\n/g, '') == window.localStorage.getItem("email")) {
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
                image={scooter.img ? scooter.img : images[currentImageIndex]}
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
