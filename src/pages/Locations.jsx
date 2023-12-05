import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stores from "../layouts/Stores";

const Locations = () => {
  return (
    <>
      <div className="px-32 py-12">
        <h1 className="text-7xl font-bold pb-6">Locations</h1>
        <div className="grid grid-cols-4 gap-1">
          <iframe className="outline w-[50rem] h-[50rem] col-span-2" src="https://www.google.com/maps/d/embed?mid=1cu_pS-wXIkpWfxh64doiM8LjEBQ3dIQ&ehbc=2E312F"></iframe>
          <span className="col-span-2 pl-64"><Stores /></span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Locations;