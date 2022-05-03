import * as React from "react";
import { useState } from "react";
import "./Product.css";
import "bootstrap";
import medicalCover from "../../assets/medical_cover.jpg";
// or get all of the named exports for further usage
import * as bootstrap from "bootstrap";

const Product = ({ products }) => (
  <>
    {products.map((product, i) => (
      <div id="container">
        {/* <!-- Start	Product details --> */}
        <div className="product-details">
          {/* <!-- 	Product Name --> */}
          <h1>{product.name}</h1>

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
          <img src={product.src} alt="Omar Dsoky" />
          <div className="info">
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
              <li>
                <strong>Dimension: </strong>
                {product.Dimension}
              </li>
              <li>
                <strong>Thickness: </strong>
                {product.Thickness}
              </li>
            </ul>
          </div>
        </div>
      </div>
      // <li key={i}>
      //   <figure>
      //     <img src={product.src} alt={product.name} />
      //     <figcaption>
      //       <div>{product.name} </div>
      //       <span>{product.type}</span>
      //     </figcaption>
      //   </figure>
      // </li>
    ))}
  </>
);

export default Product;
