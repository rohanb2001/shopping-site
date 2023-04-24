import classes from "./sidebar.module.css";

import { AiOutlineRight } from "react-icons/ai";
import SidebarItem from "./sidebar-item";
import Link from "next/link";

function Sidebar(props) {
  const { sidebar, showSidebar } = props;

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
          <Link href="/cart" onClick={showSidebar}>
            <button>View Cart</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
