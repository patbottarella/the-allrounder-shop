import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/currentPageActions";
import "./styles.css";

class NotFound extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage("Not Found - 404");
  }

  render() {
    return (
      <div className="NotFound-PageWrapper">
        <h2 className="Title">404</h2>
        <p>Unfortunately there was no page found..</p>
      </div>
    );
  }
}

export default connect(
  null,
  { setCurrentPage }
)(NotFound);
