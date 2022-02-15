import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { CardContent, Container, Grid } from "@mui/material";
import { CardMedia, Typography } from "@material-ui/core";
import cleaning from "../../../Images/cleaning.jpg";
import "./Quality.css";

const Quality = () => {
  return (
    <Container>
      <Card
        elevation={2}
        sx={{
          display: "flex",
          height: "500px",
          mt: 5,
          mb: 5,
        }}
      >
        <CardMedia
          className="qualityImage"
          component="img"
          image={cleaning}
          alt="Live from space album cover"
          style={{ maxWidth: "500px" }}
        />

        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 3,
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <div>
                  <Typography variant="h4" component="p">
                    Reasons to{" "}
                    <span style={{ color: "violet" }}>Choose Us</span>
                  </Typography>
                  <br />
                  <Typography variant="p" component="p">
                    Behind our commitment to excellence are few key attributes
                    that define who we are and what makes us different from any
                    other.
                  </Typography>
                  <br />
                  <Typography variant="h5" component="p">
                    🧹 Top-Rated Company
                  </Typography>
                  <br />
                  <Typography variant="p" component="p">
                    We hold a successful track record of satisfying our
                    customers and getting back their bond money.
                  </Typography>
                  <br />
                  <Typography variant="h5" component="p">
                    🧹 Superior Quality
                  </Typography>
                  <br />
                  <Typography variant="p" component="p">
                    We use the most excellent quality tools and equipment to get
                    all the dust and dirt out of your premises.
                  </Typography>
                  <br />
                  <Typography variant="h5" component="p">
                    🧹 Eco-Friendly Products
                  </Typography>
                  <br />
                  <Typography variant="p" component="p">
                    We use biodegradable products which do not harm the
                    environment, pets or humans in any way.
                  </Typography>
                  <br />
                </div>
                <br />
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
export default Quality;
