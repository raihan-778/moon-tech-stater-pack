import { ADD_TO_CARD } from "../../actionType/actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CARD,
    payload: product,
  };
};
