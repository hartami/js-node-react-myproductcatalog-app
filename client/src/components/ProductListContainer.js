import React from "react";
import "./ProductListContainer.css";
//import "./productcard.css";

function ProductListContainer(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.image} alt="painting" width="200px" />
      <p className="price">{props.price}</p>
      <p> Color: {props.color}</p>
      <p>
        <button>Contact the Painter</button>
      </p>
      <p />
    </div>
  );
}

export default ProductListContainer;
