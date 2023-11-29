import React from "react";
import shopImage from "../logo.png";
import { products } from "./data";
import Card from "./components/card";

import Icon from "./icon";

const Category = ({ categories }) => {
  const categoryFiltered = (products, selectedCategory) => {
    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  };

  return (
    <div className="category">
      <img src={shopImage} alt="Shop Image" className="shopImage" />
      <span className="category-text">
        {categories.map((category, index) => {
          const capitalizedCategory =
            category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

          return (
            <p key={index} className="category-text" onClick={categoryFiltered}>
              {capitalizedCategory}
            </p>
          );
        })}
      </span>

      <Icon />
    </div>
  );
};

export default Category;
