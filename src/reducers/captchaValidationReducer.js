import { SET_VALIDATION_CAPTCHA } from "../actions/types";

const initialState = {
  isCaptchaValidated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_VALIDATION_CAPTCHA:
      return {
        ...state,
        isCaptchaValidated: action.payload
      };
    default:
      return state;
  }
}
