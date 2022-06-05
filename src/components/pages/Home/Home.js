import React from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Banner from "./Banner/Banner";
import bags from "./images/bag_img.png";
import bags2 from "./images/bag2_img.png";
import bags3 from "./images/bag3_img.jpg";
import bags4 from "./images/bag4_img.jpg";
import bags5 from "./images/bag5_img.jpg";
import bags6 from "./images/bag6_img.jpg";
import Slider from "./Slider/Slider";
import "./Home.css";

const Home = ({ popupHandler }) => {
  return (
    <div>
      <Breadcrumb Page="Home" />
      <Banner popupHandler={popupHandler} />
      <div className="home-2">
        <div className="w-1000">
          <h1 className="align-c">
            <q className="quotes">
              "Reduce, Refuse, Reuse, Recycle Plastic Bags, instead, Renew,
              Reuse and Recycle Paper Bags"
            </q>
          </h1>
          <h1 className="align-c">
            <q className="quotes">
              "If you are ‘Fantastic’ then do something ‘Drastic’ to cut the
              ‘Plastic’, use 'Paper Bags'"
            </q>
          </h1>
        </div>
      </div>
      <div className="w-1000">
        <div className="grid-cols-3 p-10 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div className="w-full rounded-rad">
            <img className="rounded-rad" src={bags2} alt="image" />
          </div>
          <div className="w-full col-span-2 row-span-2 rounded-rad">
            <img className="rounded-rad" src={bags} alt="image" />
          </div>
          <div className="w-full rounded-rad">
            <img className="rounded-rad" src={bags3} alt="image" />
          </div>
          <div className="w-full rounded-rad">
            <img className="rounded-rad" src={bags4} alt="image" />
          </div>
          <div className="w-full rounded-rad">
            <img className="rounded-rad" src={bags5} alt="image" />
          </div>
          <div className="w-full rounded-rad">
            <img className="rounded-rad" src={bags6} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
