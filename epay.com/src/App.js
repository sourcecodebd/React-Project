import React, { Component } from "react";
import "./App.css";
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/E-Pay/Customer/Sign-In" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/E-Pay/Customer/Sign-Up" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );
    const login = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        {login ? (
          <Router>
             <Navbar/>
            <Route exact path="/E-Pay/Customer/Sign-Up" component={Signup}></Route>
            <Route path="/E-Pay/Customer/Sign-In" component={Signin}></Route>
          </Router>
        ) : (
          <Router>
            {navLink}
            <Route exact path="/E-Pay/Customer/Sign-Up" component={Signup}></Route>
            <Route path="/E-Pay/Customer/Sign-In" component={Signin}></Route>
          </Router>
        )}
      </div>
    );
  }
}
