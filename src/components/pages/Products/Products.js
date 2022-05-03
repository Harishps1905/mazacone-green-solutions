import React, { Component } from "react";
import "./Products.css";
import Product from "../../Product/Product";
// import Productfilter from "../../Productfilter/Productfilter";
const products = [
  {
    name: "textile craft paper covers",
    type: "paper covers",
    Design: "Plain",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true",
    Usage: "textile",
    Color: "BROWN",
    Dimension: ["42*50", "36*48"],
    Thickness: ["46 GSM", "46 GSM"],
  },
  {
    name: "Daria Shevtsova",
    type: "paper carry bags",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true",
    Usage: "textile",
    Color: "BROWN",
    Dimension: ["42*50", "36*48"],
    Thickness: ["46 GSM", "46 GSM"],
  },
  {
    name: "Kasuma",
    type: "paper cups",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true",
    Usage: "textile",
    Color: "BROWN",
    Dimension: ["42*50", "36*48"],
    Thickness: ["46 GSM", "46 GSM"],
  },
  {
    name: "Dominika Roseclay",
    type: "D cut bags",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true",
    Usage: "textile",
    Color: "BROWN",
    Dimension: ["42*50", "36*48"],
    Thickness: ["46 GSM", "46 GSM"],
  },
  {
    name: "Scott Webb",
    type: "W cut bags",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true",
    Usage: "textile",
    Color: "BROWN",
    Dimension: ["42*50", "36*48"],
    Thickness: ["46 GSM", "46 GSM"],
  },
  {
    name: "Jeffrey Czum",
    type: "Cake box",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true",
    Usage: "textile",
    Color: "BROWN",
    Dimension: ["42*50", "36*48"],
    Thickness: ["46 GSM", "46 GSM"],
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

const Filters = ({ onClickAll, all, onClick, filters }) => (
  <form id="productfilter">
    <ul>
      <li onClick={onClickAll}>
        <input type="checkbox" checked={all} />
        <label htmlFor="all">All</label>
      </li>
      {filters.map((filter, i) => (
        <li key={i} data-index={i} onClick={onClick}>
          <input id={filter.name} type="checkbox" checked={filter.status} />
          <label htmlFor={filter.name}>{filter.name}</label>
        </li>
      ))}
    </ul>
  </form>
);

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
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}
        />
        {all ? (
          <Product products={products} />
        ) : (
          <Product products={this.state.products} />
        )}
      </div>
    );
  }
}
export default Products;
