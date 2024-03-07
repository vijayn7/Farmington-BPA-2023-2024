// Importing necessary dependencies from React and React Router
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing custom components
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/Navbar";

// Importing pages components
import Homepage from "./pages/Homepage";
import Locations from "./pages/Locations";
import Order from "./pages/Order";
import Catering from "./pages/Catering";
import AboutUs from "./pages/AboutUs";

// Main component representing the entire application
const App = () => {
  return (
    <div>
      {/* Setting up BrowserRouter for client-side navigation */}
      <BrowserRouter>
        {/* Defining routes for different pages using React Router */}
        <Routes>
          {/* Base route for navigation bar across all pages */}
          <Route path="/" element={<Navbar />}>
            {/* Default route for the homepage */}
            <Route index element={<Homepage />} />
            {/* Route for the 'Locations' page */}
            <Route path="locations" element={<Locations />} />
            {/* Route for the 'Order' page */}
            <Route path="order" element={<Order />} />
            {/* Route for the 'Catering' page */}
            <Route path="catering" element={<Catering />} />
            {/* Route for the 'About Us' page */}
            <Route path="aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      {/* Adding a BackToTopButton component for smooth scrolling to the top */}
      <BackToTopButton />
    </div>
  );
};

// Exporting the App component as the default export
export default App;
