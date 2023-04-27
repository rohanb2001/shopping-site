import Counter from "../counter/counter";
import classes from "./sidebar-item.module.css";

import Image from "next/image";

function SidebarItem({ name, price, count, size }) {
  const imagePath = `/images/item/shirts-1.jpg`;

  const number = Number(price);
  const formattedNumber = number.toLocaleString("en-US");

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
            <p className={classes.size}>Size: {size}</p>
          </div>
          <div className={classes.quantity}>{`Quantity: ${count}`}</div>
        </div>
      </li>
    </>
  );
}

export default SidebarItem;
