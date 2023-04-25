import classes from "./content-detail.module.css";

import Counter from "@/components/counter/counter";

function ContentDetails(props) {
  const { post } = props;
  const { name, price } = post;

  return (
    <>
      <div className={classes.contentDetails}>
        <h1>{name}</h1>
        <p>{`${price}.00`}</p>
        <form className={classes.form}>
          <label htmlFor="size">Size</label>
          <select name="size" id="size" defaultValue={"select"}>
            <option value="select" disabled hidden>
              Select
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extraLarge">Extra Large</option>
          </select>
          <label htmlFor="quantity">Quantity</label>
          <div className={classes.counter}>
            <Counter />
          </div>
          <div className={classes.actions}>
            <button>Add to Cart</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContentDetails;
