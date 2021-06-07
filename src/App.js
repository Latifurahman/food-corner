import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Deals from "./components/Deals/Deals";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import NoMatch from "./components/NoMatch/NoMatch";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
          <Route path="/checkOut">
            <CheckOut />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
