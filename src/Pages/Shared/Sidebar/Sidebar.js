import { Box, Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import SelectAllSharpIcon from "@mui/icons-material/SelectAllSharp";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const btnStyle = {
  color: "white",
  width: "200px",
  display: "flex",
  justifyContent: "left",
};
const AdminSidebar = () => {
  // const [admins, setAdmins] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/isAdmin")
  //     .then((res) => res.json())
  //     .then((data) => setAdmins(data));
  // }, []);

  return (
    <Box className="sidebar">
      <ul>
        <li>
          <Button
            component={Link}
            to={"/orderList"}
            className="btnStyle"
            style={btnStyle}
          >
            <ShoppingCartCheckoutIcon sx={{ mr: 2 }} /> Order list
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to={"/addService"}
            className="btnStyle"
            style={btnStyle}
          >
            <AddIcon sx={{ mr: 2 }} /> Add service
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to={"/addAdmin"}
            className="btnStyle"
            style={btnStyle}
          >
            <PersonAddAltSharpIcon sx={{ mr: 2 }} /> Make Admin
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to={"/manageService"}
            className="btnStyle"
            style={btnStyle}
          >
            <SelectAllSharpIcon sx={{ mr: 2 }} /> Manage Services
          </Button>
        </li>

        <li>
          <Button
            component={Link}
            to={"/book"}
            className="btnStyle"
            style={btnStyle}
          >
            <ShoppingCartOutlinedIcon sx={{ mr: 2 }} />
            Book
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to={"/bookList"}
            className="btnStyle"
            style={btnStyle}
          >
            <FactCheckOutlinedIcon sx={{ mr: 2 }} /> Booking List
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to={"/review"}
            className="btnStyle"
            style={btnStyle}
          >
            <RateReviewOutlinedIcon sx={{ mr: 2 }} /> Review
          </Button>
        </li>
      </ul>
    </Box>
  );
};

export default AdminSidebar;
