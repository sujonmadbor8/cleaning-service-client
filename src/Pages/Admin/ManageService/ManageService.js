import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "./../../Shared/Sidebar/Sidebar";

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleDelete = (event, id) => {
    console.log(event.target.id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          event.target.parentNode.style.display = "none";
          console.log("deleted successfullty");
        }
      });
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={3} xs={6}>
        <Sidebar />
      </Grid>
      <Grid item md={9} xs={6} sx={{ mt: 3, pr: 10 }}>
        <Item>
          <React.Fragment>
            <Table size="small">
              <TableHead>
                <TableRow
                  style={{
                    backgroundColor: "grey",
                  }}
                >
                  <TableCell sx={{ p: 2, color: "white", fontSize: "18px" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ p: 2, color: "white", fontSize: "18px" }}>
                    Price
                  </TableCell>

                  <TableCell
                    sx={{
                      p: 2,
                      textAlign: "right",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    Pay With
                  </TableCell>
                  <TableCell
                    sx={{
                      p: 2,
                      textAlign: "right",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <TableRow>
                    <TableCell sx={{ p: 2 }}>{service.service.title}</TableCell>
                    <TableCell>${service.service.price}</TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      Visa Card
                    </TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        color="error"
                        onClick={(event, id) =>
                          handleDelete(event, service._id)
                        }
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ManageService;
