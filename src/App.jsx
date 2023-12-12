import React from "react";
import Homepage from "./pages/Homepage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Catering from "./pages/Catering";

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
    </div>
  );
};

export default App;
