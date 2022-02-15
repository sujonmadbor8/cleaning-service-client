import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import window from "../../../Logo/WindowCleaning.png";
import commercial from "../../../Logo/commercialCleaning.png";
import residential from "../../../Logo/residentialCleaning.png";

import ListCard from "../ListCard/ListCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const servicesData = [
  {
    id: 1,
    type: "Window Cleaning",
    description: {
      desc1: "Carpet Cleaning",
      desc2: "Dust All Furniture",
      desc3: "Har sucface floor cleaning",
    },

    logo: window,
    price: 250,
    bgColor: "red",
    status: "pending",
  },
  {
    id: 2,
    type: "Commercial Cleaning",
    description: {
      desc1: "Carpet Cleaning",
      desc2: "Dust All Furniture",
      desc3: "Har sucface floor cleaning",
    },
    logo: commercial,
    price: 350,
    bgColor: "green",
    status: "done",
  },
  {
    id: 3,
    type: "Residential Cleaning",
    description: {
      desc1: "Carpet Cleaning",
      desc2: "Dust All Furniture",
      desc3: "Har sucface floor cleaning",
    },
    logo: residential,
    price: 400,
    bgColor: "green",
    status: "done",
  },
];
const BookList = () => {
  const handleSubmit = () => console.log("data");
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <Item
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "space-around",
              height: "580px",
              backgroundColor: "lightgray",
            }}
          >
            {servicesData.map((service) => (
              <Grid>
                <ListCard service={service} />
              </Grid>
            ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookList;
