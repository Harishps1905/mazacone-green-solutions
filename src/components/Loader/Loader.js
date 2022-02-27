import React, { Component } from "react";
import "./Loader.css";
import logo from "./media/mazacone_logo.png";

class Loader extends Component {
  render() {
    return (
      <>
        {/* <div class="lds-dual-ring"> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* </div> */}
      </>
    );
  }
}
export default Loader;
