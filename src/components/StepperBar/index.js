import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "./styles.css";

function getActiveStep(uri) {
  switch (uri) {
    case "Cart":
      return 0;
    case "Payment":
      return 1;
    case "Complete":
      return 3;
    default:
      return 0;
  }
}

const StepperBar = props => {
  if (props.currentPage.currentPage === "Shop") {
    return null;
  }

  const stepWithLink = (name, linkTo) => {
    return (
      <Step>
        <StepLabel><Link to={linkTo} className="StepLink">{name}</Link></StepLabel>
      </Step>
    )
  }

  const stepWithOutLink = (name) => {
    return (
      <Step>
        <StepLabel>{name}</StepLabel>
      </Step>
    )
  }

  return (
    <div className="StepperWrapper">
      <Stepper activeStep={getActiveStep(props.currentPage.currentPage)} orientation="vertical">
        {props.currentPage === "Payment" || props.currentPage === "Complete" ?
          stepWithLink("Your Cart", "/cart") : stepWithOutLink("Your Cart")}
        {stepWithOutLink("Payment Details")}
        {stepWithOutLink("Your Order is Complete")}
      </Stepper>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(StepperBar);