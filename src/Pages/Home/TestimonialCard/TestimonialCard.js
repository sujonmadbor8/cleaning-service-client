import { Avatar, CardContent } from "@material-ui/core";
import { Card, CardActionArea, Rating, Typography } from "@mui/material";
import "./TestimonialCard.css";

const TestimonialCard = ({ review }) => {
  // console.log(review.review);
  const { name, designation, description, rating, image } = review.review;

  return (
    <Card
      className="testimonialCard"
      style={{ margin: "auto" }}
      elevation={5}
      sx={{ maxWidth: 300, textAlign: "justify" }}
    >
      <CardActionArea sx={{ p: 1 }}>
        <CardContent>
          <Typography component="div" sx={{ display: "flex", mb: 2 }}>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src={`data:image/png;base64,${image}`}
                style={{ width: "50px", height: "50px" }}
              />
            </Typography>
            <Typography component="div" sx={{ ml: 3 }}>
              <Typography variant="h6">{name}</Typography>
              <span style={{ color: "violet" }}>{designation}</span>
            </Typography>
          </Typography>
          <Typography variant="p">{description}</Typography>
          <br />

          <Typography sx={{ mt: 2, textAlign: "center" }}>
            <Rating name="controlled" value={rating} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TestimonialCard;
