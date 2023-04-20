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
            <div className={classes.category}>Shirts</div>
            <div className={classes.category}>T-shirts</div>
            <div className={classes.category}>Pants</div>
          </div>
        </div>
      </div>
      <CategoriesImage />
    </>
  );
}

export default CategoriesContent;
