import React from "react";

// Importing custom components and layouts
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stores from "../layouts/Stores";

// Functional component for the 'Locations' page
const Locations = () => {
  return (
    <>
      {/* Container for the main content of the 'Locations' page */}
      <div className="lg:px-32 py-12">
        
        {/* Page title */}
        <h1 className="text-7xl font-bold pb-6 text-center lg:text-left">Locations</h1>
        
        {/* Grid layout with Google Maps iframe and Stores component */}
        <div className="grid grid-cols-4 gap-1">
          {/* Google Maps iframe, hidden on smaller screens */}
          <iframe className="hidden lg:block outline lg:w-[150%] lg:h-[100%] xl:w-[130%] 2xl:w-[50rem] 2xl:h-[50rem] col-span-2" src="https://www.google.com/maps/d/embed?mid=1cu_pS-wXIkpWfxh64doiM8LjEBQ3dIQ&ehbc=2E312F"></iframe>
          
          {/* Stores component displayed on the right side */}
          <span className="px-32 lg:px-0 col-span-4 lg:col-span-2 lg:pl-64"><Stores /></span>
        </div>
      </div>
      
      {/* Footer component */}
      <Footer />
    </>
  );
};

// Exporting the 'Locations' component as the default export
export default Locations;
