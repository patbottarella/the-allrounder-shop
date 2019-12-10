import React from 'react';
import { connect } from 'react-redux';
import { setCaptchaValidation } from '../../actions/captchaValidationActions';
import ReCAPTCHA from 'react-google-recaptcha';

class ReCAPTCHAComponent extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}
	onChange(value) {
		if (value !== '' || value !== null) {
			this.props.setCaptchaValidation(true);
		} else {
			this.props.setCaptchaValidation(false);
		}
	}

	render() {
		return (
			<ReCAPTCHA
				sitekey="6Lc2hrQUAAAAAL5yqrDn7N3hklmMhZXHGI7wOYsb"
				onChange={this.onChange}
				className={this.props.className}
			/>
		);
	}
}

export default connect(
	null,
	{ setCaptchaValidation }
)(ReCAPTCHAComponent);
