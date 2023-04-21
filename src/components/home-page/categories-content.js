import Link from "next/link";

import classes from "./categories-content.module.css";
import CategoriesImage from "./categories-image";

function CategoriesContent() {
  return (
    <>
      <div className={classes.statement}>
        <h1>statement of lifestyle</h1>
        <p>Labelbyvp offers pan india free delivery</p>
        <div>
          <div className={classes.categories}>
            <Link className={classes.category} href="/shirts">
              Shirts
            </Link>
            <Link className={classes.category} href="/t-shirts">
              T-shirts
            </Link>
            <Link className={classes.category} href="/pants">
              Pants
            </Link>
          </div>
        </div>
      </div>
      <CategoriesImage />
    </>
  );
}

export default CategoriesContent;
