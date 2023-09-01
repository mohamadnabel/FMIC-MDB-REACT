import React from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Cards from "./components/Card"
function App() {
  return (
    <div className="main-div-countener">
      <NavBar />
      <Carousel/>
      <Cards/>
    </div>
  );
}

export default App;
