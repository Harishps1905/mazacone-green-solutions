import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import { NavLink } from "react-router-dom";
import fullLogo from "../../assets/mazacone_txt_logo2.png";

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
    let menu = document.querySelector(".menu");
    menu.classList.toggle("slideUp");
    setTimeout(() => {
      menu.classList.toggle("slideUp", "animationNone");
      this.props.mobileMenuHandler();
    }, 500);
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
            strokeWidth="8"
          />
          <line
            x1="3.82843"
            y1="3.30689"
            x2="39.1838"
            y2="38.6622"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
        <img className="menuLogo desktopHide" src={fullLogo} />
        <NavLink style={navStyle} activeClassName="menuactive" to="/">
          {this.menuList("Home")}
        </NavLink>
        <NavLink style={navStyle} to="/Products" activeClassName="menuactive">
          {this.menuList("Products")}
        </NavLink>
        <NavLink style={navStyle} to="/Services" activeClassName="menuactive">
          {this.menuList("Services")}
        </NavLink>
        <NavLink style={navStyle} to="/AboutUs" activeClassName="menuactive">
          {this.menuList("About Us")}
        </NavLink>
      </nav>
    );
  }
}
Menu.propTypes = {
  mobileMenuHandler: PropTypes.func.isRequired,
};
export default Menu;
