import * as React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
// import "./ProductsImages/3jpg";
import "bootstrap";
import Imgslider from "./Imgslider/Imgslider";
import medicalCover from "../../assets/medical_cover.jpg";

const Product = ({ products }) => {
  const DimThick = ({ DT }) => {
    const [dim, setDim] = useState(null);
    const [thicknessState, setThicknessState] = useState(DT.Thickness[0]);

    const handleDimensions = (e) => {
      let currentDimention = e.target.value;
      let i = DT.Dimension.indexOf(currentDimention);
      setThicknessState(DT.Thickness[i]);
    };
    if (DT.Dimension.length > 1) {
      return (
        <>
          <li>
            <strong>Dimension/Size: </strong>
            <select id="Dimensions" onChange={handleDimensions}>
              {DT.Dimension.map((dim, i) => (
                <option value={dim} key={i}>
                  {dim}
                </option>
              ))}
            </select>
          </li>
          <li>
            <strong>Thickness: </strong>
            {thicknessState}
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <strong>Dimension/Size: </strong>
            {DT.Dimension[0]}
          </li>
          <li>
            <strong>Thickness: </strong>
            {thicknessState}
          </li>
        </>
      );
    }
  };

  return (
    <>
      {products.map((product, i) => (
        <div id="container" key={i}>
          {/* <!-- Start	Product details --> */}
          <div className="product-details">
            <h2>{product.name}</h2>
            <ul>
              <li>
                <strong>Design: </strong>
                {product.Design}
              </li>
              <li>
                <strong>Usage: </strong>
                {product.Usage}
              </li>
              <li>
                <strong>Color: </strong>
                {product.Color}
              </li>
              <DimThick DT={product} />
              {/* <li>
                <strong>Dimension: </strong>
                <Dimension
                  dimentions={product.Dimension}
                  thickness={product.Thickness}
                />
              </li>
              <li>
                <strong>Thickness: </strong>
                {thicknessState}
              </li> */}
            </ul>
          </div>

          {/* <!-- 	End	Product details   --> */}

          {/* Start product image & Information */}

          <div className="product-image">
            {/* {product.src.length == 1 ? (
              <img src="./ProductsImages/3jpg" alt="Omar Dsoky" />
            ) : ( */}
            <Imgslider productimgs={product.src} />
            {/* )} */}

            <div className="info">
              {/* <!-- 	Product Name --> */}
              <h1>{product.name}</h1>

              {/* <!-- The most important information about the product --> */}
              <p className="information">
                " The manufacturer of a wide assortment of Cotton Cloth Bag,
                Paper Bag, Grocerry Bag and many more. These products are known
                for their matchless quality and remarkable finish."
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
