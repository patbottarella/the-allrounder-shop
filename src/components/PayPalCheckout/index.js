import React from 'react';
import PaypalBtn from 'react-paypal-checkout';
import { setInitalCartState } from '../../actions/cartActions';
import { setErrorMessage } from '../../actions/checkoutActions';
import { connect } from 'react-redux';

class PayPalCheckout extends React.Component {
	render() {
		const totalPrice = () => {
			let totalPrice = 0;
			this.props.cart.cart.products.map((item) => {
				return totalPrice += item.productPrice;
			});
			return totalPrice;
		};

		const onSuccess = (payment) => {
			this.props.history.push('/complete');
			this.props.setInitalCartState(true);
			localStorage.clear();
		};

		const onCancel = (data) => {
			this.props.setErrorMessage(true);
		};

		const onError = (err) => {
			this.props.setErrorMessage(true);
		};

		let total = totalPrice();
		let style = {
			label: 'pay',
			tagline: false,
			size: 'large',
			shape: 'rect',
			color: 'gold'
		};
		const client = {
			sandbox: 'Ae39X_oEi9D2pzTLVsAXSKGvgsFFI2JvMybZVJK98D0ehDAMKjzmuCwNq-33Uz5lETBIkChBJXE7JEae'
		};

		return (
			<PaypalBtn
				env="sandbox"
				client={client}
				currency="CHF"
				total={total}
				locale="de_CH"
				style={style}
				onError={onError}
				onSuccess={onSuccess}
				onCancel={onCancel}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	cart: state.cart
});

export default connect(
	mapStateToProps,
	{ setInitalCartState, setErrorMessage }
)(PayPalCheckout);
