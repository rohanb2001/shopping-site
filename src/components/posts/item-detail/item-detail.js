import Image from "next/image";
import classes from "./item-detail.module.css";
import Counter from "@/components/counter/counter";

function ItemDetails() {
  const imagePath = `/images/item/shirts-1.jpg`;

  return (
    <>
      <div className={classes.contentContainer}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt="image"
            width={450}
            height={450}
            layout="responsive"
            priority
          />
        </div>
        <div className={classes.contentDetails}>
          <h1>Tartan</h1>
          <p>$999.00</p>
          <form className={classes.form}>
            <label htmlFor="size">Size</label>
            <select name="size" id="size">
              <option value="select" selected disabled hidden>
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
      </div>
    </>
  );
}

export default ItemDetails;
