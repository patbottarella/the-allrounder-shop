import React from "react";
import products from "./mockData";
import ProductCard from "../../components/ProductCard";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/currentPageActions";
import "./styles.css";

class ShopView extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage("Shop");
  }
  render() {
    return (
      <>
      <h1 className="TitleShop">Our Products</h1>
      <div className="ProductWrapperShop">
        {products.map((item, index) => {
          return <ProductCard key={index} productData={item} />;
        })}
      </div>
      </>
    );
  }
}

export default connect(
  null,
  { setCurrentPage }
)(ShopView);
