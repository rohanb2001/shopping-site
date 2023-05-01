const cartReducer = (state, action) => {
  // Add to Cart
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

  // Increment and Decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        let decCount = currElem.count - 1;

        return {
          ...currElem,
          count: decCount,
        };
      } else {
        return currElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INECREMENT") {
    let updatedProduct = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        let incrementCount = currElem.count + 1;

        if (incrementCount >= 6) {
          incrementCount = 6;
        }

        return {
          ...currElem,
          count: incrementCount,
        };
      } else {
        return currElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  return state;
};

export default cartReducer;
