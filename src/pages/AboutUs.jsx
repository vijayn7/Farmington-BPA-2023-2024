import React, { Component } from 'react';

// Importing custom components
import Founders from "../components/Founders";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

// Class component for the 'AboutUs' page
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* Displaying the Mission component */}
        <Mission />
        
        {/* Displaying the Founders component */}
        <Founders />
        
        {/* Displaying the Footer component */}
        <Footer />
      </div>
    );
  }
}