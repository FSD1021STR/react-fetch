import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../logo.svg";

const NavBar = () => {
  return (
    <div className="container">
      <div className="links-container">
        <Link to="/home">
          <img
            className="App-logo"
            alt="logo"
            src={logo}
            width="150px"
            height="150px"
          />
        </Link>
        <Link className="links" to="/home">
          Home
        </Link>
        <Link className="links" to="/pokemon">
          Pokemons
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
