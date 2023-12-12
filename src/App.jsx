import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Locations from "./pages/Locations";
import Order from "./pages/Order";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="locations" element={<Locations />} />
            <Route path="orders" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </div>
  );
};

export default App;
