import React, { Component } from "react";
import "./Navigation.css";
import logo from "../../assets/mazacone_logo.png";
import fullLogo from "../../assets/mazacone_txt_logo2.png";
import Menu from "../Menu/Menu";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
    };
  }

  hamburger = () => {
    if (this.state.mobileMenu) {
      this.setState({
        mobileMenu: false,
      });
    } else {
      this.setState({
        mobileMenu: true,
      });
    }
  };

  render() {
    return (
      <nav className="navigation">
        <div className="Brandname flex-row">
          <img src={fullLogo} />
        </div>
        <svg
          className="hamburger"
          width="60"
          height="50"
          viewBox="0 0 60 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.hamburger}
        >
          <path
            d="M0 5H60M0 24.8305H60M0 44.661H60"
            stroke="#0096ff"
            stroke-width="9"
          />
        </svg>
        {this.state.mobileMenu ? (
          <Menu mobileMenuHandler={this.hamburger} />
        ) : null}
      </nav>
    );
  }
}
export default Navigation;
