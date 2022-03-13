import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/home" active="active">
          Home
        </NavLink>
        <NavLink to="/todo" active="active">
          Todos
        </NavLink>
        <NavLink to="/about" active="active">
          About
        </NavLink>
        <NavLink to="/user" active="active">
          Users
        </NavLink>
        {/* <Link className="active" to="/home">
          Home
        </Link>
        <Link to="/todo">Todos</Link>
        <Link to="/about">About</Link> */}
      </div>
    );
  }
}

export default Nav;
