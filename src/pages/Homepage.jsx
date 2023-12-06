import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Home />
      <div id="menu">
        <Menu />
      </div>
      <Mission />
      <Footer />
    </div>
  );
};

export default Homepage;