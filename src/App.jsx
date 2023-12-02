import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import Review from "./components/Review";
import Cards from "./components/cards";

const App = () => {
  return (
    <div>
      <div id="#home">
        <Home />
      </div>
        <Cards />
    </div>
  );
};

export default App;
