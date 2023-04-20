import Link from "next/link";

import { BiLogIn } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";

import classes from "./main-navigation.module.css";

import Logo from "./logo";

function MainNavigation() {
  return (
    <>
      <header className={classes.headers}>
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
            <AiOutlineShopping size="27px" />
          </div>
        </div>
      </header>
    </>
  );
}

export default MainNavigation;
