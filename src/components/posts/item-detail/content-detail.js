import { useContext, useState } from "react";

import classes from "./content-detail.module.css";

import AddToCartContext from "@/context/addToCart-content";
import Counter from "@/components/counter/counter";

function ContentDetails(props) {
  const { addToCart } = useContext(AddToCartContext);

  const { post } = props;
  const { name, price, id } = post;

  const [count, setCount] = useState(1);
  const [size, setSize] = useState("small");

  function handleSelectChange(event) {
    setSize(event.target.value);
  }

  function handleIncrement(event) {
    event.preventDefault();
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement(event) {
    event.preventDefault();
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <div className={classes.contentDetails}>
        <h1>{name}</h1>
        <p>${`${price}.00`}</p>
        <form className={classes.form}>
          <label htmlFor="size">Size</label>
          <select
            name="size"
            id="size"
            required
            onChange={handleSelectChange}
            value={size}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra Large">Extra Large</option>
          </select>
          <label htmlFor="quantity">Quantity</label>
          <div className={classes.counter}>
            <Counter
              count={count}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          </div>
        </form>
        <div
          className={classes.actions}
          onClick={() => addToCart(id, name, price, count, size, post)}
        >
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ContentDetails;
