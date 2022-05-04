import * as React from "react";
import "./Productfilter.module.css";

const Productfilter = ({ onClickAll, all, onClick, filters }) => {
  return (
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
};

export default Productfilter;
