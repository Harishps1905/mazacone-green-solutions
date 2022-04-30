import React, { Component } from "react";
import "./Products.css";
import Product from "../../Product/Product";
import { Button } from "bootstrap";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          CoverType: "Medical Pouch",
          Design: "Plain",
          Usage: "Packaging",
          Color: "Brown and White",
          Dimension: "4x5",
          price: "Rs.XXX",
          Thickness: "60 GSM and 70 GSM",
        },
        {
          CoverType: "Bakery Pouch",
          Design: "Plain",
          Usage: "Packaging",
          Color: "Brown and White",
          Dimension: "4x5",
          price: "Rs.XXX",
          Thickness: "60 GSM and 70 GSM",
        },
        {
          CoverType: "Grocery Pouch",
          Design: "Plain",
          Usage: "Packaging",
          Color: "Brown and White",
          Dimension: "4x5",
          price: "Rs.XXX",
          Thickness: "60 GSM and 70 GSM",
        },
      ],
    };
  }

  render() {
    return (
      <section id="products">
        <div className="productlist">
          {this.state.productList
            ? this.state.productList.map((product) => (
                <Product
                  Product={product}
                  key={this.state.productList.indexOf(product + 1)}
                />
              ))
            : null}
        </div>
      </section>
    );
  }
}
export default Products;
