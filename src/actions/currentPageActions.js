import { SET_CURRENT_PAGE } from "./types";

export const setCurrentPage = currentPage => dispatch => {
  dispatch(setCurrentPageToStore(currentPage));
};

export const setCurrentPageToStore = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage
  };
};
