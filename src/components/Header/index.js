import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import "./styles.css";

class Header extends React.Component {
  componentDidMount(){
    if (localStorage.getItem("productsInCart")) {
      this.props.cart.cart.products = JSON.parse(localStorage.getItem("productsInCart"))
    }
  }
  render() {
    return (
      <AppBar className="HeaderWrapper" position="static">
        <Toolbar className="ToolBar">
          <h3 className="HeaderTitle">{this.props.currentPage.currentPage}</h3>
          <Link to="/">
            <IconButton
              edge="start"
              className="HomeIconWrapper"
              color="inherit"
              aria-label="menu"
            >
              <FontAwesomeIcon icon={faHome} className="IconHome" />
            </IconButton>
          </Link>
          <Link to="/cart">
            <IconButton
              edge="start"
              className="ShoppingCartIconWrapper"
              color="inherit"
              aria-label="menu"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="IconCart" />
            </IconButton>
          </Link>
          {this.props.cart.cart.products.length > 0 ? (
            <span className="CartItemsBadge">
              {this.props.cart.cart.products.length}
            </span>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(Header);
