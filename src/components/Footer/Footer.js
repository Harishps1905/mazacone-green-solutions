import React, { Component } from "react";
import "./Footer.css";
import {
  IoLocationSharp,
  IoCall,
  IoMail,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io5";
import logo from "../../assets/mazacone_txt_logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // ES6

class Footer extends Component {
  menuList = (menuItem) => {
    return <span className="menuList">{menuItem}</span>;
  };
  render() {
    const iconStyle = {
      color: "black",
      textDecoration: "none",
    };
    const navStyle = {
      color: "black",
      textDecoration: "none",
      display: "block",
    };
    return (
      <footer>
        <div>
          <div className="location">
            <span>
              <IoLocationSharp className="icon" />
            </span>
            <span>4/526, KONOOR NALUKETTU P.O. KORATTY, THRISSUR 680308</span>
          </div>
          <div className="mobile">
            <span>
              <IoCall className="icon" />
            </span>
            <span>
              <a href="tel:7902580078">7902580078</a>
            </span>
          </div>
          <div className="mail">
            <span>
              <IoMail className="icon" />
            </span>
            <span>
              <a href="mailto: mazaconegreen@gmail.com">
                mazaconegreen@gmail.com
              </a>
            </span>
          </div>
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
        </div>
        <div>
          <div>
            <img className="footerLogo" src={logo} />
          </div>
          <div className="about">About the company</div>
          <div className="description">
            lorem ipsum dolor sit amet, consectetur adip
          </div>
          <div className="socialMedia">
            <IoLogoFacebook style={iconStyle} />
            <a href="https://wa.me/7306757656" target="_blank">
              <IoLogoWhatsapp style={iconStyle} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
