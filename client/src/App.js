import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ProductListContainer from "./components/ProductListContainer";

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    //fetching data with axios
    axios.get(`/products`).then(res => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <div className="App">
        <p> </p>
        <p> </p>
        <p> </p>
        <h1>Welcome to Saung Warna!</h1>
        <h2>These are our product catalog.</h2>
        <ul>
          {this.state.products.map(product => (
            <p key={product.id}>
              <a href={product.url}>
                <h3>
                  <ProductListContainer
                    title={product.productname}
                    color={product.color}
                    price={product.price}
                    image={product.sourcepic}
                  />
                </h3>
              </a>
              <p />
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
