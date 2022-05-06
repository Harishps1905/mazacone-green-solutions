import React, { Component } from "react";
import "./Products.css";
import Product from "../../Product/Product";
import Productfilter from "../../Productfilter/Productfilter";

import textileCPC from "./ProductsImages/textile.jpg";
import medicinecpc from "./ProductsImages/medicinecpc.jpg";
import bakeryfoldingcpc from "./ProductsImages/bakeryfoldingcpc.jpg";
import pcb1 from "./ProductsImages/pcb1.jpg";
import pcb2 from "./ProductsImages/pcb2.jpg";
import pcb3 from "./ProductsImages/pcb3.jpg";
import pcb4 from "./ProductsImages/pcb4.jpg";
import pcb5 from "./ProductsImages/pcb5.jpg";
import pcb6 from "./ProductsImages/pcb6.jpg";
import pcb7 from "./ProductsImages/pcb7.jpg";
import pgt from "./ProductsImages/pgt.jpg";
import pgw from "./ProductsImages/pgw.jpg";
import cb1 from "./ProductsImages/cb1.jpg";
import cb2 from "./ProductsImages/cb2.jpg";
import cb3 from "./ProductsImages/cb3.jpg";
import cb4 from "./ProductsImages/cb4.jpg";
import nvdcb from "./ProductsImages/nvdcb.jpg";
import nvwcb from "./ProductsImages/nvwcb.jpg";

const products = [
  {
    name: "TEXTILE CRAFT PAPER COVER",
    type: "paper covers",
    Design: "Plain",
    src: [textileCPC],
    Usage: "Textile",
    Color: "Brown",
    Dimension: [
      "Select Dimension",
      "42*50",
      "36*48",
      "31*44",
      "26*40",
      "22*36",
      "22*33",
      "18*33",
      "18*24",
      "14*44",
    ],
    Thickness: [
      "** GSM",
      "46 GSM",
      "46 GSM",
      "46 GSM",
      "47 GSM",
      "47 GSM",
      "47 GSM",
      "47 GSM",
      "47 GSM",
      "47 GSM",
    ],
  },
  {
    name: "MEDICINE CRAFT PAPER COVER",
    type: "paper covers",
    Design: "Plain",
    src: [medicinecpc],
    Usage: "Medicals",
    Color: "Brown/White",
    Dimension: ["Select Dimension", "12*16", "10*14", "9*13", "7*12"],
    Thickness: ["** GSM", "44 GSM", "44 GSM", "44 GSM", "44 GSM"],
  },
  {
    name: "BAKERY/FOLDING CRAFT PAPER COVER",
    type: "paper covers",
    Design: "Plain",
    src: [bakeryfoldingcpc],
    Usage: "Bakery/Folding",
    Color: "Brown",
    Dimension: [
      "Select Dimension",
      "22*9*44",
      "18*8*36",
      "14*8*30",
      "12*6*28",
      "10*4*24",
      "8*4*20",
    ],
    Thickness: [
      "** GSM",
      "46 GSM",
      "44 GSM",
      "44 GSM",
      "44 GSM",
      "44 GSM",
      "44 GSM",
    ],
  },
  {
    name: "PAPER CARRY BAG - BOX TYPE & V BOTTOM",
    type: "paper carry bags",
    Design: "Plain",
    src: [pcb1, pcb2, pcb3, pcb4, pcb5, pcb6, pcb7],
    Usage: "Medicals",
    Color: "As per requirement",
    Dimension: ["Customized sizes available upon requirement"],
    Thickness: ["80 GSM, 100 GSM, 120 GSM, 200 GSM, 220 GSM, 250 GSM"],
  },
  {
    name: "TEA GLASS 130ML",
    type: "paper cups",
    Design: "Plain",
    src: [pgt],
    Usage: "Partying/Celebration",
    Color: "As per requirement",
    Dimension: ["130ML"],
    Thickness: ["Not Applicable"],
  },
  {
    name: "WATER GLASS 150ML",
    type: "paper cups",
    Design: "Plain",
    src: [pgw],
    Usage: "Partying/Celebration",
    Color: "As per requirement",
    Dimension: ["150ML"],
    Thickness: ["Not Applicable"],
  },
  {
    name: "CAKE BOXES",
    type: "Cake box",
    Design: "Customized upon requirement",
    src: [cb1, cb2, cb3, cb4],
    Usage: "Cake shop",
    Color: "As per requirement",
    Dimension: ["Customized sizes available upon requirement"],
    Thickness: ["Not Applicable"],
  },
  {
    name: "NON VOWEN D-CUT BAG",
    type: "D cut bags",
    Design: "Plain",
    src: [nvdcb],
    Usage: "Need to",
    Color: "As per requirement",
    Dimension: ["Select Dimension", "16*20", "14*18", "12*16", "10*14"],
    Thickness: ["** GSM", "80 GSM", "80 GSM", "80 GSM", "80 GSM"],
  },
  ,
  {
    name: "NON VOWEN W-CUT BAG",
    type: "W cut bags",
    Design: "Plain",
    src: [nvwcb],
    Usage: "Need to",
    Color: "As per requirement",
    Dimension: [
      "Select Dimension",
      "10*24",
      "13*16",
      "16*20",
      "17*23",
      "20*26",
      "23*23",
    ],
    Thickness: [
      "** GSM",
      "60 GSM",
      "60 GSM",
      "60 GSM",
      "60 GSM",
      "60 GSM",
      "60 GSM",
    ],
  },
];

const filters = [
  { name: "paper covers", status: false },
  { name: "paper carry bags", status: false },
  { name: "paper cups", status: false },
  { name: "D cut bags", status: false },
  { name: "W cut bags", status: false },
  { name: "Cake box", status: false },
];

class Products extends Component {
  state = {
    products,
    filters,
    all: true,
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters,
    });

    this.updateFilters();
    this.updateImgs();
  };

  setAll = () => {
    const { filters } = this.state;

    filters.forEach((filter) => {
      filter.status = false;
    });

    this.setState({
      all: true,
      filters,
    });
  };

  updateFilters() {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false,
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    products.forEach((product, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if (product.type == filter.name && filter.status == true) {
          newImgs[a] = product;
          a++;
        }
      });
    });

    this.setState({
      products: newImgs,
    });
  }

  render() {
    const { filters, all } = this.state;
    return (
      <div>
        <Productfilter
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}
        />
        <div className="productcontainer">
          {all ? (
            <Product products={products} />
          ) : (
            <Product products={this.state.products} />
          )}
        </div>
      </div>
    );
  }
}
export default Products;
