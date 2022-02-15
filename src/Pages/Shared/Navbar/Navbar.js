import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid } from "@mui/material";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../../Logo/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "./../../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "red",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "380px",
  },
  ButtonStyle: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "end",
    marginRight: "30px",
  },
}));

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar className="navStyle" position="static">
        <Toolbar>
          <Grid md={4} margin={1}>
            <img src={logo} width="50px" alt="" />
          </Grid>
          {isMobile ? (
            <Grid>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem component={Link} to={"/home"}>
                  Home
                </MenuItem>
                <MenuItem component={Link} to={"/about"}>
                  About us
                </MenuItem>
                <MenuItem component={Link} to={"/projects"}>
                  Projects
                </MenuItem>
                <MenuItem component={Link} to={"/contact"}>
                  Contact
                </MenuItem>
                <MenuItem component={Link} to={"/admin"}>
                  Admin
                </MenuItem>
                <MenuItem>
                  <Button className="btnStyle">Login</Button>
                </MenuItem>
              </Menu>
            </Grid>
          ) : (
            <>
              <Grid className={classes.headerOptions}>
                <Button
                  component={Link}
                  to="/home"
                  className={classes.ButtonStyle}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to={"/about"}
                  className={classes.ButtonStyle}
                >
                  About us
                </Button>
                <Button
                  component={Link}
                  to={"/projects"}
                  className={classes.ButtonStyle}
                >
                  Projects
                </Button>
                <Button
                  component={Link}
                  to={"/contact"}
                  className={classes.ButtonStyle}
                >
                  Contact
                </Button>
                <Button
                  component={Link}
                  to={"/admin"}
                  className={classes.ButtonStyle}
                >
                  Admin
                </Button>
              </Grid>
              <Grid>
                {loggedInUser.email ? (
                  <Button
                    onClick={() => setLoggedInUser({})}
                    style={{ borderRadius: "25px" }}
                    className="btnStyle"
                  >
                    LogOut
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to="login"
                    style={{ borderRadius: "25px" }}
                    className="btnStyle"
                  >
                    Login
                  </Button>
                )}
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
