import { SET_VALIDATION_CAPTCHA } from "./types";

export const setCaptchaValidation = isCaptchaValid => dispatch => {
  dispatch(setCaptchaValidationToStore(isCaptchaValid));
};

export const setCaptchaValidationToStore = isCaptchaValid => {
  return {
    type: SET_VALIDATION_CAPTCHA,
    payload: isCaptchaValid
  };
};
