import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addNewProduct } from "../../actions/cartActions";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

class ProductCard extends React.Component {
  handleClick = () => {
    this.props.addNewProduct(this.props.productData);
  };

  render() {
    return (
      <Card className="ProductCard">
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.props.productData.productTitle}
          </Typography>
          <Typography>
            <img
              src={this.props.productData.productImage}
              alt={this.props.productData.productTitle}
              style={{ height: "100px", width: "auto" }}
            />
          </Typography>
          <Typography color="textSecondary">
            {this.props.productData.productDescription}
          </Typography>
          <Typography variant="body2" component="p">
            {this.props.productData.productPrice + " CHF"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.handleClick} size="small">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default connect(
  null,
  { addNewProduct }
)(ProductCard);
