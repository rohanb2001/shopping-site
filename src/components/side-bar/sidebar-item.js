import Counter from "../counter/counter";
import classes from "./sidebar-item.module.css";

import Image from "next/image";

function SidebarItem() {
  const imagePath = `/images/item/shirts-1.jpg`;

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
            <h3>Tartan</h3>
            <p>$999.00</p>
          </div>
          <Counter />
        </div>
      </li>
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
            <h3>Tartan</h3>
            <p>$999.00</p>
          </div>
          <Counter />
        </div>
      </li>
    </>
  );
}

export default SidebarItem;
