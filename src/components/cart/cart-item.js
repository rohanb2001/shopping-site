import classes from "./cart-item.module.css";

import Image from "next/image";
import Counter from "../counter/counter";
import { AiFillDelete } from "react-icons/ai";
import { useCartContext } from "@/context/addToCart-content";

function CartItem({ name, price, count, size, id }) {
  const { cart, setDecrement, setIncrement } = useCartContext();

  const imagePath = `/images/item/shirts-1.jpg`;

  const number = Number(price);
  const formattedNumber = number.toLocaleString("en-US");
  const subTotal = count * number;

  return (
    <>
      <li>
        <div className={classes.content}>
          <div className={classes.imageContent}>
            <div className={classes.image}>
              <Image
                src={imagePath}
                alt="image"
                width={50}
                height={50}
                layout="responsive"
                priority
              />
            </div>
            <div className={classes.description}>
              <h3>{name}</h3>
              <p>${`${formattedNumber}.00`}</p>
              <p className={classes.size}>{`Size: ${size}`}</p>
              <div className={classes.count}>
                <Counter
                  count={count}
                  handleDecrement={() => setDecrement(id)}
                  handleIncrement={() => setIncrement(id)}
                />
              </div>
            </div>
          </div>
          <div className={classes.subtotalDelete}>
            <h3>${`${subTotal}.00`}</h3>
            <AiFillDelete size="20px" />
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
