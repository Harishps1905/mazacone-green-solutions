import * as React from "react";
import { useState, useEffect } from "react";

const Imgslider = ({ productimgs }) => {
  const [image, setimage] = useState(null);
  useEffect(() => {
    let count = 0;
    setimage(productimgs[count]);
    let change = () => {
      count == productimgs.length - 1 ? (count = 0) : count++;
      setimage(productimgs[count]);
    };
    setInterval(() => {
      change();
    }, 2000);
  }, []);

  // return productimgs.length == 1 ? (
  //   <img src={productimgs} alt="Omar Dsoky" />
  // ) : (
  //   <img src={image} alt="Omar Dsoky" />
  // );

  if (productimgs.length == 1) {
    return <img src={productimgs} alt="Omar Dsoky" />;
  } else if (productimgs.length > 1) {
    return <img src={image} alt="Omar Dsoky" />;
  }
  // return <img src={image} alt="Omar Dsoky" />;
};

export default Imgslider;
