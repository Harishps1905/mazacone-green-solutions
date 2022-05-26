import * as React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
// import "./ProductsImages/3jpg";

// import Imgslider from "./Imgslider/Imgslider";

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
            <span>
              <select id="Dimensions" onChange={handleDimensions}>
                {DT.Dimension.map((dim, i) => (
                  <option value={dim} key={i}>
                    {dim}
                  </option>
                ))}
              </select>
            </span>
          </li>
          <li>
            <strong>Thickness: </strong>
            <span>{thicknessState}</span>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <strong>Dimension/Size: </strong>
            <span>{DT.Dimension[0]}</span>
          </li>
          <li>
            <strong>Thickness: </strong>
            <span>{thicknessState}</span>
          </li>
        </>
      );
    }
  };

  return (
    <>
      {products.map((product, i) => (
        <div id="p-container" key={i}>
          {/* <!-- Start	Product details --> */}
          <div className="product-details">
            <h2>{product.name}</h2>
            <ul>
              <li>
                <strong>Design: </strong>
                <span>{product.Design}</span>
              </li>
              <li>
                <strong>Usage: </strong>
                <span>{product.Usage}</span>
              </li>
              <li>
                <strong>Color: </strong>
                <span>{product.Color}</span>
              </li>
              <DimThick DT={product} />
            </ul>
          </div>

          {/* <!-- 	End	Product details   --> */}

          {/* Start product image & Information */}

          <div className="product-image">
            <img src={product.src} alt="Omar Dsoky" />

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
