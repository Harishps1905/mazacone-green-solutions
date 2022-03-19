import React, { Component } from "react";
import "./Footer.css";
import {
  IoLocationSharp,
  IoCall,
  IoMail,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io5";
// import logo from "./media/mazacone_logo.png";

class Footer extends Component {
  render() {
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
        </div>
        <div>
          <div className="about">About the company</div>
          <div className="description">
            lorem ipsum dolor sit amet, consectetur adip
          </div>
          <div className="socialMedia">
            <IoLogoFacebook />
            <a href="https://wa.me/7306757656" target="_blank">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
