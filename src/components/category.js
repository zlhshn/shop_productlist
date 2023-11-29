import React from "react";
import shopImage from "../logo.png";

import Icon from  './icon'

const Category = ({ categories }) => {
  console.log(categories);
  return (
    <div className="category">
      <img src={shopImage} alt="Shop Image" className="shopImage" />
      <span className="category-text">
        {categories.map((category, index) => {
          const capitalizedCategory =
            category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

          return (
            <p key={index} className="category-text">
              {capitalizedCategory}
            </p>
          );
        })}
      </span>

    <Icon/>
    </div>
  );
};

export default Category;
