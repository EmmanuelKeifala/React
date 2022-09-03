import React from "react";
import "../index.css";
import grid from "../../assets/photo-grid.png";
const Hero = () => {
  return (
    <section>
      <img src={grid} alt="" className="section-img" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
