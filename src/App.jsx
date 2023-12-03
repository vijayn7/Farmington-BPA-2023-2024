import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import Review from "./components/Review";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Mission from "./components/Mission";
import Tabs from "./layouts/tabs";


const App = () => {
  return (
    <div>
      <Navbar />
      <div id="#home">
        <Home />
      </div>
      <Cards />
      <Mission />
      <Tabs />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
