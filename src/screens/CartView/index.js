import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/currentPageActions";
import { setRemovedProduct } from "../../actions/cartActions";
import Button from "@material-ui/core/Button";
import "./styles.css";

class CartView extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage("Cart");
  }

  handleRemoveIconClick = itemToRemove => {
    this.props.setRemovedProduct(itemToRemove);
  };

  render() {
    var totalPrice = 0;
    var isCartEmpty = this.props.cart.cart.products.length === 0;
    return (
      <div className="CartWrapper">
        <h1 className="Title">Your Cart</h1>
        {isCartEmpty ? (
          <>
            <p className="MessageNoProducts">
              Unfortunately, you have no Products in your Cart
            </p>
            <Link className="LinkStyle" to="/">
              <Button variant="contained" className="ButtonToShop">
                Back to the Shop
              </Button>
            </Link>
          </>
        ) : (
          this.props.cart.cart.products.map((item, index) => {
            if (!item) return null;
            totalPrice += item.productPrice;
            return (
              <div key={item + index} className="ProductWrapper">
                <img
                  src={item.productImage}
                  alt="product"
                  className="ProductImage"
                  style={{
                    height: "100px",
                    width: "auto",
                    gridRow: "span 3",
                    justifySelf: "center",
                    alignSelf: "center"
                  }}
                />
                <p className="ProductTitle">{item.productTitle}</p>
                <p className="ProductPrice">
                  {"Price: " + item.productPrice + " CHF"}
                </p>
                <div className="RemoveIconWrapper">
                  <FontAwesomeIcon
                    onClick={() => this.handleRemoveIconClick(item)}
                    className="RemoveIcon"
                    icon={faTimes}
                  />
                </div>
              </div>
            );
          })
        )}
        {!isCartEmpty ? (
          <>
            <div className="Seperator" />
            <div className="ProductWrapperTotalPrice">
              <p className="ProductPriceTotalPrice">
                {"Total Price: " + totalPrice + " CHF"}
              </p>
              <Link className="ButtonNext" to="/payment">
                <Button variant="contained">
                  Payment Details
                </Button>
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  currentPage: state.currentPage
});

export default connect(
  mapStateToProps,
  { setCurrentPage, setRemovedProduct }
)(CartView);
