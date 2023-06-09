import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const AddToCartContext = createContext();

export function AddToCartContextProvider(props) {
  const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Add to Cart
  function addToCart(id, name, price, count, size, post) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, count, size, post },
    });
  }

  // Increment and Decrement the product
  function setDecrement(id) {
    dispatch({
      type: "SET_DECREMENT",
      payload: id,
    });
  }

  function setIncrement(id) {
    dispatch({
      type: "SET_INECREMENT",
      payload: id,
    });
  }

  // Remove Item from Cart
  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  return (
    <AddToCartContext.Provider
      value={{ ...state, addToCart, setDecrement, setIncrement, removeItem }}
    >
      {props.children}
    </AddToCartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(AddToCartContext);
}

export default AddToCartContext;
