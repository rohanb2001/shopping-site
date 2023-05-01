import classes from "./sidebar.module.css";

import { AiOutlineRight } from "react-icons/ai";
import SidebarItem from "./sidebar-item";
import Link from "next/link";
import { useCartContext } from "@/context/addToCart-content";
import { Total } from "@/lib/item-total";

function Sidebar(props) {
  const { sidebar, showSidebar } = props;

  const { cart } = useCartContext();
  console.log(cart);

  const subTotalAmount = Total(cart);

  return (
    <>
      <div
        className={
          sidebar
            ? `${classes.sidebar} ${classes.active}`
            : `${classes.sidebar}`
        }
      >
        <div className={classes.top}>
          <div className={classes.icon}>
            <AiOutlineRight size="21px" onClick={showSidebar} />
          </div>
          <div className={classes.heading}>Cart</div>
        </div>
        <div className={classes.cartContent}>
          <ul>
            {cart.map((item) => {
              return <SidebarItem key={item.id} {...item} />;
            })}
          </ul>
        </div>
        <div className={classes.viewCart}>
          <div className={classes.amount}>
            <h2>Subtotal</h2>
            <p>${`${subTotalAmount}.00`}</p>
          </div>
          <Link href="/cart" onClick={showSidebar}>
            <button>View Cart</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
