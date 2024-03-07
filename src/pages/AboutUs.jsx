import React, { Component } from 'react'
import Founders from "../components/Founders";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
export default class AboutUs extends Component {
  render() {
    return (
      <div>
      <Mission/>
      <Founders/>
      <Footer />
      </div>

    )
  }
}
