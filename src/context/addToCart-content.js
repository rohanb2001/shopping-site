import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const AddToCartContext = createContext();

export function AddToCartContextProvider(props) {
  const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(id, name, price, count, size, post) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, count, size, post },
    });
  }

  return (
    <AddToCartContext.Provider value={{ ...state, addToCart }}>
      {props.children}
    </AddToCartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(AddToCartContext);
}

export default AddToCartContext;
