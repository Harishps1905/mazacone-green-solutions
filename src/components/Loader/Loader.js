import React, { Component } from "react";
import "./Loader.css";
import logo from "../../assets/mazacone_logo.png";

class Loader extends Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
      </>
    );
  }
}
export default Loader;
