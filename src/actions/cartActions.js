import { SET_NEW_PRODUCT, REMOVE_PRODUCT, RESET_CART } from "./types";

export const addNewProduct = product => dispatch => {
  dispatch(setNewProduct(product));
};

export const removeProduct = product => dispatch => {
  dispatch(setRemovedProduct(product));
};

export const setNewProduct = product => {
  return {
    type: SET_NEW_PRODUCT,
    payload: product
  };
};

export const setRemovedProduct = product => {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
};

export const setInitalCartState = shouldReset => {
  return {
    type: RESET_CART,
    payload: shouldReset
  };
};
