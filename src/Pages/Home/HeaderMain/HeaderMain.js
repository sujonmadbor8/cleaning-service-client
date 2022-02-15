import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <Card
      className="headerStyle"
      sx={{
        display: "flex",
        height: "500px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <div
            style={{
              backgroundColor: "lightgrey",
              opacity: "0.9",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h6" component="px">
              Professional Cleaning Services
            </Typography>
            <Typography component="div" variant="h3">
              SO FRESH AND CLEAN...
              <br />
              WE PROMISE <br />
            </Typography>
            <br />
            <Button
              style={{
                borderRadius: "25px",
                color: "white",
                padding: "10px 15px",
              }}
              className="btnStyle"
            >
              Free Estimate
            </Button>
          </div>
          <br />
        </CardContent>
      </Box>
    </Card>
  );
};

export default HeaderMain;
