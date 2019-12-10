import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/currentPageActions";
import { resetErrorMessage } from "../../actions/checkoutActions";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReCAPTCHA from "../../components/ReCAPTCHA";
import PayPalCheckout from "../../components/PayPalCheckout";
import "./styles.css";

let totalPrice = 0;

class PaymentView extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage("Payment");
    this.props.resetErrorMessage(false);
    if (this.props.cart.cart.products.length !== 0) {
      localStorage.setItem('cartData', JSON.stringify(this.props.cart.cart.products));
    } else if (localStorage.getItem("cartData")) {
      this.props.cart.cart.products = JSON.parse(localStorage.getItem("cartData"))
    } else {
      // no products either in cart or localstorage
      this.props.history.push("/cart")
    }
  }

  shouldComponentUpdate(prevProps, prevState) {
    return (
      prevProps.captcha.isCaptchaValidated !==
      this.props.captcha.isCaptchaValidated ||
      prevProps.checkout.isCheckoutFailed !==
      this.props.checkout.isCheckoutFailed
    );
  }

  render() {
    totalPrice = 0;
    return (
      <div className="PaymentWrapper">
        <h1 className="TitlePayment">Payment</h1>
        {this.props.captcha.isCaptchaValidated ? (
          <>
          <p className="SubTitle">Your Order</p>
          <ul className="ListProducts">
            {this.props.cart.cart.products.map(item => {
              totalPrice += item.productPrice;
              return (
                <li key={item.id + item.productTitle}>
                  {item.productTitle} - {item.productPrice}.-
                  </li>
              );
            })}
          </ul>
          <p className="TotalPrice">Total: {totalPrice}.-</p>
            {
            this.props.checkout.isCheckoutFailed ? (
              <p className="CheckoutErrorMessage">
                Error: you either cancelled during payment or PayPal refused to
                accept your payment
              </p>
            ) : (
                ""
              )
          }
          < div className="PayPalButton">
				<PayPalCheckout history={this.props.history} />
      </div>
          </>
        ) : (
          <>
      <p className="SubTitle">
        To proceed please confirm this security measure.
            </p>
      <ReCAPTCHA className="CaptchaButton" />
          </>
        )
  }
        <Link className="LinkStyle" to="/cart">
  <Button variant="contained" className="ButtonBackPayment">
    Back
  </Button>
</Link>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  captcha: state.captcha,
  cart: state.cart,
  checkout: state.checkout
});

export default connect(
  mapStateToProps,
  { setCurrentPage, resetErrorMessage }
)(PaymentView);
