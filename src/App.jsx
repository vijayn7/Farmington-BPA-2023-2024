import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/Navbar";
import Catering from "./pages/Catering";
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
            <Route path="menu" element={<Menu />} />
            <Route path="mission" element={<Mission />} />
            <Route path="catering" element={<Catering />} />

          </Route>
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </div>
  );
};

export default App;
