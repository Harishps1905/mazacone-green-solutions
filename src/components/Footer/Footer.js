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
  mouseOver = (e) => {
    e.target.style.width = "32px";
  };
  mouseOut = (e) => {
    e.target.style.width = "30px";
  };
  render() {
    const iconStylef = {
      textDecoration: "none",
      width: "30px",
      height: "auto",
      color: "#4267B2",
    };
    const iconStylew = {
      textDecoration: "none",
      width: "30px",
      height: "auto",
      color: "#128C7E",
    };
    const navStyle = {
      color: "black",
      textDecoration: "none",
      display: "block",
      margin: "10px 0",
    };
    return (
      <footer>
        <div id="footercontainer">
          <div className="ftleft">
            <div className="location">
              <span>
                <IoLocationSharp className="icon" />
              </span>
              <span>
                MAZACONE GREEN SOLUTIONS PAPER PRODUCTS THUMBOOR. P.O PIN 680
                662 THRISSUR (DIST)
              </span>
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
            {/* <Link style={navStyle} to="/Services">
            {this.menuList("Services")}
          </Link> */}
            <Link style={navStyle} to="/AboutUs">
              {this.menuList("About Us")}
            </Link>
          </div>
          <div className="ftright">
            <div>
              <img className="footerLogo" src={logo} />
            </div>
            <div className="about">About the company</div>
            <div className="description">
              " The manufacturer of a wide assortment of Cotton Cloth Bag, Paper
              Bag, Grocerry Bag and many more. These products are known for
              their matchless quality and remarkable finish. "
            </div>
            <div className="socialMedia">
              <a href="#" target="_blank">
                <IoLogoFacebook
                  onMouseOver={this.mouseOver}
                  onMouseOut={this.mouseOut}
                  style={iconStylef}
                />
              </a>
              <a href="https://wa.me/7306757656" target="_blank">
                <IoLogoWhatsapp
                  onMouseOver={this.mouseOver}
                  onMouseOut={this.mouseOut}
                  style={iconStylew}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
