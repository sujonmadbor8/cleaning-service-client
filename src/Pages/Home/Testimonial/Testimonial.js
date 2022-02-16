import React, { useEffect, useState } from "react";
import img from "../../../Images/testimonialAvatar.jpg";
import { Container, Grid } from "@material-ui/core";
import TestimonialCard from "./../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://agile-inlet-49151.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container style={{ marginTop: " 50px", marginBottom: " 50px" }}>
      <div className="serviceStyle">
        <h1>Testimonial</h1>
      </div>
      <br />
      <br />
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard review={review} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
