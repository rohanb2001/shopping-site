const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, name, price, count, size, post } = action.payload;

    let existingProduct = state.cart.find(
      (currItem) => currItem.id === id + name + size
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((currItem) => {
        if (currItem.id === id + name + size) {
          let newCount = currItem.count + count;
          return {
            ...currItem,
            count: newCount,
          };
        } else {
          return currItem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + name + size,
        name,
        price,
        count,
        size,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  return state;
};

export default cartReducer;
