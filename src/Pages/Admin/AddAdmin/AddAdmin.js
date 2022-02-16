import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    fetch("https://agile-inlet-49151.herokuapp.com/addAdmin", {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctor added successfully");
          console.log("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Upload successfully");
  };
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item xs sx={{ pt: 5, height: "300px" }} component="form">
          <Item sx={{ pt: 3 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "45ch" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                type="email"
                id="outlined-basic"
                label="example@gmail.com"
                variant="outlined"
                onBlur={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="success"
              >
                Add Admin
              </Button>
            </Box>
            {success && <p style={{ color: "green" }}>{success}</p>}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddAdmin;
