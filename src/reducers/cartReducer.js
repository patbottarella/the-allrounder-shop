import { SET_NEW_PRODUCT, REMOVE_PRODUCT, RESET_CART } from "../actions/types";

const initialState = {
  isCartEmpty: false,
  cart: {
    products: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_PRODUCT:
      const listOfID = state.cart.products.map(product => {
        return product.id;
      });
      const isAlreadyInCart = listOfID.includes(action.payload.id);
      var oldProductState = JSON.parse(localStorage.getItem('productsInCart')) || [];
      if (!isAlreadyInCart){
        oldProductState.push(action.payload);
      }
      localStorage.setItem('productsInCart', JSON.stringify(oldProductState));
      
      return {
        ...state,
        cart: {
          products: isAlreadyInCart
            ? [...state.cart.products]
            : [...state.cart.products, action.payload]
        },
        isCartEmpty: action.payload.isCartEmpty
      };

    case REMOVE_PRODUCT:
      const newStateAfterRemove = state.cart.products.filter(
        product => product.id !== action.payload.id
      );
      localStorage.setItem('productsInCart', JSON.stringify(newStateAfterRemove));

      return {
        ...state,
        cart: { products: newStateAfterRemove },
        isCartEmpty: action.payload.isCartEmpty
      };
    case RESET_CART:
      return {
        ...state,
        cart: { products: []}
      }
    default:
      return state;
  }
}
