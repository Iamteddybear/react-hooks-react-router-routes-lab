import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li className="navbar">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="navbar">
        <NavLink exact to="/movies" activeClassName="active">
          Movies
        </NavLink>
      </li>
      <li className="navbar">
        <NavLink exact to="/directors" activeClassName="active">
          Directors
        </NavLink>
      </li>
      <li className="navbar">
        <NavLink exact to="/actors" activeClassName="active">
          Actors
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
