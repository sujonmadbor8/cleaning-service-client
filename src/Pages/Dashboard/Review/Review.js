import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Button, Rating, TextField } from "@mui/material";
import { FormHelperText } from "@material-ui/core";
import "./Review.css";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Review = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [designationError, setDesignationError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && designation && description) {
      console.log(name, designation, description);
    }
    if (name === "") {
      setNameError("Name required");
    }
    if (designation === "") {
      setDesignationError("Company Name & Designation required");
    }
    if (description === "") {
      setDescriptionError("Description required");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("rating", rating);

    fetch("https://agile-inlet-49151.herokuapp.com/addReview", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("review added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("review added successfully");
  };
  console.log(name, designation, description, rating);
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs
          sx={{
            pt: 5,
            height: "550px",
          }}
          component="form"
        >
          <Item sx={{ pt: 3 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "45ch" },
              }}
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                required
                onBlur={(e) => setName(e.target.value)}
                error={nameError}
              />
              <FormHelperText id="my-helper-text">{nameError}</FormHelperText>
              <TextField
                id="outlined-basic"
                label="Compnay's name, Designation"
                variant="outlined"
                required
                onBlur={(e) => setDesignation(e.target.value)}
                error={designationError}
              />
              <FormHelperText id="my-helper-text">
                {designationError}
              </FormHelperText>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                required
                onBlur={(e) => setDescription(e.target.value)}
                error={descriptionError}
              />
              <FormHelperText id="my-helper-text">
                {descriptionError}
              </FormHelperText>
              <TextField
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Rating
                style={{ width: "50px" }}
                name="controlled"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="success"
              >
                Submit
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;
