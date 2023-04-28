import classes from "./cart-item.module.css";

import Image from "next/image";
import Counter from "../counter/counter";
import { AiFillDelete } from "react-icons/ai";

function CartItem(props) {
  const imagePath = `/images/item/shirts-1.jpg`;

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
              <h3>Tartan</h3>
              <p>$999.00</p>
              <p className={classes.size}>Size: small</p>
              <div className={classes.count}>
                <Counter count={"1"} />
              </div>
            </div>
          </div>
          <div className={classes.subtotalDelete}>
            <h3>$6,993</h3>
            <AiFillDelete size="20px" />
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
