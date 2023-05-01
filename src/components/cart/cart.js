import classes from "./cart.module.css";

import CartItem from "./cart-item";
import { useCartContext } from "@/context/addToCart-content";
import Link from "next/link";
import { Total } from "@/lib/item-total";

function Cart() {
  const { cart } = useCartContext();

  const total = Total(cart);

  return (
    <>
      <div className={classes.contentContainer}>
        <div className={classes.myCart}>
          <h2 className={classes.heading}>My Cart</h2>
          <hr />
          <ul>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </ul>
        </div>
        <div className={classes.summary}>
          <h2 className={classes.heading}>Order Summary</h2>
          <hr />
          <div className={classes.total}>
            <div>
              <h3>Total</h3>
              <p>${`${total}.00`}</p>
            </div>
            <div>
              <h3>Shipping</h3>
              <p>FREE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
