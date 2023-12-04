import React from "react";
import Homepage from "./pages/Homepage";
import Locations from "./pages/Locations";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="locations" element={<Locations />} />
            <Route path="mission" element={<Mission />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
