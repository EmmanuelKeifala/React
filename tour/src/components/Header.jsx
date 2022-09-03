import React from "react";
import "../index.css";
import globe from "../assets/globe-svgrepo-com.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={globe} alt="" srcset="" className="logo" />
      <h3>my travel journal.</h3>
    </div>
  );
};

export default Header;
