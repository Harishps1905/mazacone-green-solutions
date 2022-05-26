import React from "react";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Breadcrumb Page="Home" />
      <Banner />
      <Slider />
    </div>
  );
};

export default Home;
