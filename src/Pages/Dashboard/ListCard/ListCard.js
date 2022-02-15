import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ListCard = ({ service }) => {
  const { type, description, logo, bgColor, status } = service;
  const { desc1, desc2, desc3 } = description;
  return (
    <Card
      style={{ margin: "auto" }}
      elevation={5}
      sx={{ maxWidth: 300, textAlign: "center" }}
    >
      <CardActionArea sx={{ p: 1 }}>
        <Typography
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <CardMedia
            component="img"
            image={logo}
            alt="green iguana"
            style={{ width: "50px" }}
          />
          <Typography
            style={{
              backgroundColor: `${bgColor}`,
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              borderRadius: "10px",
              color: "white",
            }}
            variant="h6"
          >
            {status}
          </Typography>
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {type}
          </Typography>

          <Typography variant="body2" color="text.secondary" padding="0 10px">
            ✅ {desc1} <br />✅ {desc2} <br />✅ {desc3}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ListCard;
