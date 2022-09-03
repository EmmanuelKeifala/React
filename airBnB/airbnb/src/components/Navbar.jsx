import React from "react";
import "../index.css";
import logo from "../../assets/airbnb.svg";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" className="nav-img" />
    </nav>
  );
};

export default Navbar;
