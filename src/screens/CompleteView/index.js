import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setCurrentPage } from "../../actions/currentPageActions";
import "./styles.css";

class CompleteView extends React.Component {
	componentDidMount() {
		this.props.setCurrentPage("Complete");
	}
	render() {
		return (
			<div className="CompleteWrapper">
				<h1 className="TitleComplete">Complete</h1>
				<p className="SubTitleComplete">
					Thank You. Your order got transmitted successfully
        </p>
				<img
					alt="complete"
					src="https://clipart-library.com/images_k/green-check-mark-transparent-background/green-check-mark-transparent-background-3.png"
					style={{
						height: "128px",
						width: "auto",
						justifySelf: "center",
						gridColumn: "span 2"
					}}
				/>
				<Button variant="contained" className="ButtonToShopComplete">
					<Link className="LinkStyle" to="/">
						Continue Shopping
          </Link>
				</Button>
			</div>
		);
	}
}

export default connect(
	null,
	{ setCurrentPage }
)(CompleteView);
