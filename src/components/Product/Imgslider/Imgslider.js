import * as React from "react";
import { useState, useEffect } from "react";
let myCounter = 0;
let timeout = null;

const Imgslider = ({ productimgs }) => {
  const [count, setcount] = useState(0);
  const [image, setimage] = useState(productimgs[0]);

  // useEffect(() => {
  //   return () => clearInterval(timeout);
  // }, []);

  // myCounter = count;
  // timeout = setInterval(() => {
  //   count == image.length - 1 ? setcount(0) : setcount((count) => count + 1);
  //   setimage(productimgs[myCounter]);
  //   console.log(count);
  // }, 2000);
  ///////////////////////////////////////////////
  // useEffect(() => {
  //   const interval = setInterval(() => {}, 1000);
  //   return () => clearInterval(timeout);
  // }, []);
  // let change = () => {
  //   count == image.length - 1 ? setcount(0) : setcount(count++);
  //   setimage(image[count]);
  //   console.log(image);
  // };

  // Also don't forget this

  return <img src={image} alt="Omar Dsoky" />;
};

export default Imgslider;
