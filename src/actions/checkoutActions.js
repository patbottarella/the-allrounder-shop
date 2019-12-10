import { SET_ERROR_MESSAGE, RESET_ERROR_MESSAGE } from "./types";

export const setErrorMessage = isCheckoutFailed => dispatch => {
  dispatch(setErrorMessageToStore(isCheckoutFailed));
};

export const resetErrorMessage = shouldResetErrorMessage => dispatch => {
  dispatch(resetErrorMessageToStore(shouldResetErrorMessage))
}

export const setErrorMessageToStore = isCheckoutFailed => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: isCheckoutFailed
  };
};

export const resetErrorMessageToStore = shouldResetErrorMessage => {
  return {
    type: RESET_ERROR_MESSAGE,
    payload: shouldResetErrorMessage
  };
};