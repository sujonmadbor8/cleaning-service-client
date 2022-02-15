import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Sidebar from "./../../Shared/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const OrderList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function createData(id, name, email, service, payWith, status, color) {
    return { id, name, email, service, payWith, status, color };
  }

  const rows = [
    createData(
      0,
      "Elvis Presley",
      "sujonmadbor8@gmail.com",
      "Skin Care Treatment",
      "Creadit Card",
      "Pending",
      "red"
    ),
    createData(
      1,
      "Elvis Presley",
      "sujonmadbor8@gmail.com",
      "Skin Care Treatment",
      "Creadit Card",
      "Done",
      "green"
    ),
    createData(
      2,
      "Elvis Presley",
      "sujonmadbor8@gmail.com",
      "Skin Care Treatment",
      "Creadit Card",
      "Done",
      "green"
    ),
    createData(
      3,
      "Elvis Presley",
      "sujonmadbor8@gmail.com",
      "Skin Care Treatment",
      "Creadit Card",
      "Pending",
      "red"
    ),
    createData(
      4,
      "Elvis Presley",
      "sujonmadbor8@gmail.com",
      "Skin Care Treatment",
      "Creadit Card",
      "Done",
      "green"
    ),
  ];

  function preventDefault(event) {
    event.preventDefault();
  }
  return (
    <Grid container spacing={2}>
      <Grid item md={3} xs={6}>
        <Sidebar />
      </Grid>
      <Grid item md={9} xs={6} sx={{ mt: 3, pr: 10 }}>
        <Item>
          <React.Fragment>
            {/* <Title>Recent Orders</Title> */}
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ p: 2 }}>Name</TableCell>
                  <TableCell sx={{ p: 2 }}>Email</TableCell>
                  <TableCell sx={{ p: 2 }}>Service</TableCell>
                  <TableCell sx={{ p: 2 }}>Pay With</TableCell>
                  <TableCell sx={{ p: 2 }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{ p: 2 }}>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.service}</TableCell>
                    <TableCell>{row.payWith}</TableCell>
                    <TableCell>
                      <span style={{ color: `${row.color}` }}>
                        {row.status}
                      </span>
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

export default OrderList;
