import React, { Component } from "react";
import "./AboutUs.css";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb Page="AboutUs" />
        AboutUs
      </div>
    );
  }
}
export default AboutUs;
