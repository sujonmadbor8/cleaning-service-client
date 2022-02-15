import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const ServiceCard = ({ service }) => {
  const { title, description, image, price } = service.service;

  const styles = useSpring({
    loop: true,
    delay: 2000,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
  });
  return (
    <Card
      style={{ margin: "auto" }}
      elevation={5}
      sx={{ maxWidth: 300, height: 300, textAlign: "center" }}
    >
      <CardActionArea sx={{ p: 1 }}>
        <animated.div
          style={{
            boxShadow: "2px 2px 4px grey",
            borderRadius: 10,
            width: "70px",
            margin: "auto",
            ...styles,
          }}
        >
          <CardMedia
            component="img"
            image={`data:image/png;base64,${image}`}
            alt="green iguana"
            style={{
              width: "70px",
              margin: "auto",
            }}
          />
        </animated.div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="violet">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary" padding="0 10px">
            {description}
          </Typography>
          <Button
            component={Link}
            to={"/book"}
            style={{
              borderRadius: "25px",
              color: "white",
              marginTop: "10px",
            }}
            className="btnStyle"
          >
            Get Service
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
