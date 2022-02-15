import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import { UserContext } from "./../../../App";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Book = ({ service }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(service);
  const handleSubmit = () => console.log("data");
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item xs sx={{ pt: 5, height: "550px" }} component="form">
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
                defaultValue={loggedInUser.displayName}
                variant="standard"
                required
              />
              <TextField
                type="email"
                id="outlined-basic"
                defaultValue={loggedInUser.email}
                variant="standard"
                required
              />
              <TextField
                id="outlined-basic"
                defaultValue="Anti Age Face Treatment"
                variant="standard"
                required
              />
              <p style={{ textAlign: "left" }}>Pay to </p>
              <ProcessPayment />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography variant="span">
                    Your Service charged will be $1000
                  </Typography>
                </div>
                <div>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="success"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Book;
