import classes from "./cart.module.css";

import CartItem from "./cart-item";

function Cart() {
  return (
    <>
      <div className={classes.contentContainer}>
        <div className={classes.myCart}>
          <h2 className={classes.heading}>My Cart</h2>
          <hr />
          <ul>
            <CartItem />
            <CartItem />
          </ul>
        </div>
        <div className={classes.summary}>
          <h2 className={classes.heading}>Order Summary</h2>
          <hr />
          <div className={classes.total}>
            <div>
              <h3>Total</h3>
              <p>$10,386.00</p>
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
