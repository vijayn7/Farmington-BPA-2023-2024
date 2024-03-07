import React from "react";

// Importing custom components and layouts
import Footer from "../components/Footer";
import Founders from "../components/Founders";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Mission from "../components/Mission";
import OrderItemsView from "../layouts/OrderItemsView";

// Functional component for the homepage
const Homepage = () => {
  return (
    <div>
      {/* Home component for the main visual content */}
      <Home />
      
      {/* Menu component for displaying available menu items */}
      <Menu />
      
      {/* Footer component for the bottom of the page */}
      <Footer />
    </div>
  );
};

// Exporting the 'Homepage' component as the default export
export default Homepage;
