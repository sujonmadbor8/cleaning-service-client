import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Input, Typography } from "@mui/material";

const AddService = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://agile-inlet-49151.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(" service added successfully");
          console.log("  service added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Upload successfully");
  };
  console.log(title, price, description, image);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item md={3} xs={6}>
          <Sidebar />
        </Grid>
        <Grid item md={9} xs={6} sx={{ mt: 3 }}>
          <Typography variant="h4">Add Service</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              required
              onBlur={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="price"
              variant="outlined"
              required
              onBlur={(e) => setPrice(e.target.value)}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              required
              onBlur={(e) => setDescription(e.target.value)}
            />
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Button onClick={handleSubmit} variant="contained" color="success">
              Submit
            </Button>
          </Box>

          {success && <p style={{ color: "green" }}>{success}</p>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddService;
