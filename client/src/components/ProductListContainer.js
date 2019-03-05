import React from "react";
import "./ProductListContainer.css";
import "./productstyle.css";

function ProductListContainer(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="painting" className="responsive" />
            <p className="price">{props.price}</p>
            <p> {props.color}</p>

            <p />
        </div>
    );
}

export default ProductListContainer;
