import * as React from "react";
import { useState } from "react";
import "./Product.css";
import "bootstrap";
import medicalCover from "../../assets/medical_cover.jpg";
// or get all of the named exports for further usage
import * as bootstrap from "bootstrap";

const Product = (props) => {
  let Product = props.Product;
  // console.log(Product.Color);
  return (
    <>
      <div id="container">
        {/* <!-- Start	Product details --> */}
        <div className="product-details">
          {/* <!-- 	Product Name --> */}
          <h1>{Product.CoverType}</h1>

          {/* <!-- The most important information about the product --> */}
          <p className="information">
            " The manufacturer of a wide assortment of Cotton Cloth Bag, Paper
            Bag, Grocerry Bag and many more. These products are known for their
            matchless quality and remarkable finish."
          </p>
        </div>

        {/* <!-- 	End	Product details   --> */}

        {/* Start product image & Information */}

        <div className="product-image">
          <img src={medicalCover} alt="Omar Dsoky" />
          <div className="info">
            <h2>{Product.CoverType}</h2>
            <ul>
              <li>
                <strong>Design: </strong>
                {Product.Design}
              </li>
              <li>
                <strong>Usage: </strong>
                {Product.Usage}
              </li>
              <li>
                <strong>Color: </strong>
                {Product.Color}
              </li>
              <li>
                <strong>Dimension: </strong>
                {Product.Dimension}
              </li>
              <li>
                <strong>Thickness: </strong>
                {Product.Thickness}
              </li>
              <li>
                <strong>price: </strong>
                {Product.price}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
