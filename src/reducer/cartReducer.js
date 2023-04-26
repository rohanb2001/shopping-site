const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, name, price, count, post } = action.payload;

    let cartProduct;

    cartProduct = {
      id: id + name,
      name,
      price,
      count,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  return state;
};

export default cartReducer;
