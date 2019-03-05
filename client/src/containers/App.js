import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { productsFetchData } from "../actions/products";
import "./App.css";
import "../components/productstyle.css";
import ProductListContainer from "../components/ProductListContainer";
import ProductDetailComponent from "../components/ProductDetailComponent";

class App extends Component {
    componentDidMount() {
        this.props.fetchData("http://localhost:3001/products");
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the products</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="App">
                <div className="header">
                    <a href="#default" className="logo">
                        SaungWarna
                    </a>
                    <div className="header-right">
                        <a className="active" href="#home">
                            Gallery
                        </a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About Us</a>
                    </div>
                </div>

                <div className="row">
                    {this.props.products.map(product => (
                        <div key={product.id}>
                            <a href={product.url}>
                                <div className="column">
                                    <div className="card">
                                        <ProductListContainer
                                            title={product.productname}
                                            color={product.color}
                                            price={product.price}
                                            description={product.description}
                                            image={product.sourcepic}
                                        />
                                        <div>
                                            <button>Contact the Painter</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    fetchData: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        products: state.products,
        hasErrored: state.productsHasErrored,
        isLoading: state.productsIsLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(productsFetchData(url))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
