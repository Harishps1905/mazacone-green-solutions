import React from "react";
import "./Banner.css";
import logo from "../../../../assets/mazacone_txt_logo2x.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner">
        <div>
          <img className="bannerlogo" src={logo} />
        </div>
        <div>right</div>
      </div>
    </section>
  );
};

export default Banner;
