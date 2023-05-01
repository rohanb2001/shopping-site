import { useCartContext } from "@/context/addToCart-content";
import Counter from "../counter/counter";
import classes from "./sidebar-item.module.css";

import Image from "next/image";

function SidebarItem({ name, price, count, size, id }) {
  const { setDecrement, setIncrement } = useCartContext();

  const imagePath = `/images/item/shirts-1.jpg`;

  const number = Number(price);
  const formattedNumber = number.toLocaleString("en-US");

  const formattedSize = size.charAt(0).toUpperCase() + size.slice(1);

  return (
    <>
      <li>
        <div className={classes.content}>
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
            <p className={classes.size}>Size: {formattedSize}</p>
          </div>
          <div className={classes.quantity}>
            <Counter
              count={count}
              handleDecrement={() => setDecrement(id)}
              handleIncrement={() => setIncrement(id)}
            />
          </div>
        </div>
      </li>
    </>
  );
}

export default SidebarItem;
