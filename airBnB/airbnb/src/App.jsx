import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";
import "../src/index.css";
// import pic from "./assets/katie-zaferes.png";
// import star from "../assets/star.png";
function App() {
  const Cards = Data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{Cards}</section>
    </div>
  );
}

export default App;
