import React from "react";
import Footer from "../components/Footer";
import Founders from "../components/Founders";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Mission from "../components/Mission";
import OrderItemsView from "../layouts/OrderItemsView";

const Homepage = () => {
  return (
    <div>
      <Home />
      <Menu />
      
      <Footer />
    </div>
  );
};

export default Homepage;