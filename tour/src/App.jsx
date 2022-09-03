import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data";
function App() {
  const tours = data.map((tour) => {
    return <Card {...tour} />;
  });
  return (
    <div className="App">
      <Header />
      {tours}
    </div>
  );
}

export default App;
