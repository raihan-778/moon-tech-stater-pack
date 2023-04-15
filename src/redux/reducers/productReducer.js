import { ADD_TO_CARD, REVOME_FROM_CARD } from "../actionType/actionType";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REVOME_FROM_CARD:
      return {};
    default:
      return state;
  }
};

export default productReducer;
