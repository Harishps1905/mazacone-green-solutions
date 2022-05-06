import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ Page }) => {
  return (
    <ul className="breadcrumb">
      <li>
        <a href="#">Mazacone</a>
      </li>
      <li>{Page}</li>
    </ul>
  );
};
export default Breadcrumb;
