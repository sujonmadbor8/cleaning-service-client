import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceCard from "./../ServiceCard/ServiceCard";
import { Container, Grid } from "@material-ui/core";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://agile-inlet-49151.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container style={{ marginTop: "50px" }}>
      <div className="serviceStyle">
        <h1>Our Cleaning Services</h1>
        <hr style={{ width: 500, margin: "auto" }} /> <br />
        <p>
          Let us use our years of experience, skilled employees, and advanced
          procedures to ensure a clean <br /> and healthy environment for your
          employees, customers and guests.
        </p>
      </div>
      <br />
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
