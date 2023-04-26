import classes from "./sidebar.module.css";

import { AiOutlineRight } from "react-icons/ai";
import SidebarItem from "./sidebar-item";
import Link from "next/link";
import { useContext } from "react";
import { useCartContext } from "@/context/addToCart-content";

function Sidebar(props) {
  const { sidebar, showSidebar } = props;

  const { cart } = useCartContext();

  console.log(cart);

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
            <SidebarItem />
          </ul>
        </div>
        <div className={classes.viewCart}>
          <div className={classes.amount}>
            <h2>Subtotal</h2>
            <p>00</p>
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
