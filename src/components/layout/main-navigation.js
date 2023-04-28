import Link from "next/link";

import { BiLogIn } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";

import classes from "./main-navigation.module.css";

import Logo from "./logo";
import Sidebar from "../side-bar/sidebar";
import { useState } from "react";

function MainNavigation() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    console.log("clicked");
    setSidebar(!sidebar);
  }

  return (
    <>
      <header className={classes.header}>
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <nav>
            <ul className={classes.links}>
              <li>
                <Link href="/shirts">Shirts</Link>
              </li>
              <li>
                <Link href="/t-shirts">T-shirts</Link>
              </li>
              <li>
                <Link href="/pants">Pants</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.icons}>
          <div>
            <BiLogIn size="27px" />
            <p>
              <Link href="/login">Log In</Link>
            </p>
          </div>
          <div>
            <AiOutlineShopping size="27px" onClick={showSidebar} />
          </div>
        </div>
      </header>
      <div
        className={sidebar ? `${classes.overlay}` : ""}
        onClick={showSidebar}
      ></div>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </>
  );
}

export default MainNavigation;
