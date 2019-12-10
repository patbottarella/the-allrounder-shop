// index.js

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import currentPageReducer from "./currentPageReducer";
import captchaValidationReducer from "./captchaValidationReducer"
import checkoutReducer from "./checkoutReducer"

export default combineReducers({
  cart: cartReducer,
  currentPage: currentPageReducer,
  captcha: captchaValidationReducer,
  checkout: checkoutReducer,
});
