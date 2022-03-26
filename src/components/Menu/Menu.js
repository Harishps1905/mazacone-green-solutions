import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";
import "./Menu.css";
class Menu extends Component {
  constructor(props) {
    super(props);
  }
  menuList = (menuItem) => {
    return (
      <span className="menuList" onClick={this.closeButton}>
        {menuItem}
      </span>
    );
  };
  closeButton = () => {
    this.props.mobileMenuHandler();
  };

  render() {
    const navStyle = {
      color: "black",
      textDecoration: "none",
    };
    return (
      <nav className="menu">
        <svg
          className="menuClose desktopHide"
          width="43"
          height="42"
          viewBox="0 0 43 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.closeButton}
        >
          <line
            x1="3.17157"
            y1="38.5269"
            x2="38.5269"
            y2="3.17158"
            stroke="black"
            stroke-width="8"
          />
          <line
            x1="3.82843"
            y1="3.30689"
            x2="39.1838"
            y2="38.6622"
            stroke="black"
            stroke-width="8"
          />
        </svg>
        <Link style={navStyle} to="/">
          {this.menuList("Home")}
        </Link>
        <Link style={navStyle} to="/Products">
          {this.menuList("Products")}
        </Link>
        <Link style={navStyle} to="/Services">
          {this.menuList("Services")}
        </Link>
        <Link style={navStyle} to="/AboutUs">
          {this.menuList("About Us")}
        </Link>
      </nav>
    );
  }
}
Menu.propTypes = {
  mobileMenuHandler: PropTypes.func.isRequired,
};
export default Menu;
