import { SET_ERROR_MESSAGE, RESET_ERROR_MESSAGE } from "../actions/types";

const initialState = {
    isCheckoutFailed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        isCheckoutFailed: action.payload
      };
    case RESET_ERROR_MESSAGE:
      return {
        ...state,
        isCheckoutFailed: action.payload
      }
    default:
      return state;
  }
}
