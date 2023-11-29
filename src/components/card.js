import React from "react";
// import products from "./data";

function Card({ products }) {
  console.log(products);
  return (


    <div className="cardDiv">
      {products.map((product) => {
        const { title, description, price, category, image, id } = product;

        return (
          <div key={id} className="card">
            <div className="cardImage">
              <img
                src={image}
                alt={`Image of ${title}`}
                // style={{ width: "200px", height: "150px" }}
              />
            </div>

            <div>
              <p className="title">{title}</p>
              <p className="price">{price}$</p>
            </div>

            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
   
   
  );
}

export default Card;
