import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Shared/Login/Login";
import About from "./Pages/About/About/About";
import Projects from "./Pages/Projects/Projects/Projects";
import Contact from "./Pages/Contact/Contact/Contact";
import Admin from "./Pages/Admin/Admin/Admin";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import SignUp from "./Pages/Shared/SignUp/SignUp";
import OrderList from "./Pages/Admin/OrderList/OrderList";
import AddService from "./Pages/Admin/AddService/AddService";
import AddAdmin from "./Pages/Admin/AddAdmin/AddAdmin";
import Review from "./Pages/Dashboard/Review/Review";
import Book from "./Pages/Dashboard/Book/Book";
import BookList from "./Pages/Dashboard/BookList/BookList";
import PrivateRoute from "./Pages/Shared/Login/PrivateRoute";
import ManageService from "./Pages/Admin/ManageService/ManageService";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <PrivateRoute exact path="/admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/orderList">
            <OrderList />
          </Route>
          <Route exact path="/addService">
            <AddService />
          </Route>
          <Route exact path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/book">
            <Book />
          </Route>
          <Route exact path="/bookList">
            <BookList />
          </Route>
          <Route exact path="/manageService">
            <ManageService />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
