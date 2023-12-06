import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stores from "../layouts/Stores";

const Locations = () => {
  return (
    <>
      <div className="lg:px-32 py-12">
        <h1 className="text-7xl font-bold pb-6 text-center lg:text-left">Locations</h1>
        <div className="grid grid-cols-4 gap-1">
          <iframe className="hidden lg:block outline lg:w-[150%] lg:h-[100%] xl:w-[130%] 2xl:w-[50rem] 2xl:h-[50rem] col-span-2" src="https://www.google.com/maps/d/embed?mid=1cu_pS-wXIkpWfxh64doiM8LjEBQ3dIQ&ehbc=2E312F"></iframe>
          <span className="px-32 lg:px-0 col-span-4 lg:col-span-2 lg:pl-64"><Stores /></span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Locations;