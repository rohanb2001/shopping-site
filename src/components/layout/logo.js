import classes from "./logo.module.css";

function Logo() {
  const text = `SHOP-SITE`;
  return (
    <>
      <div className={classes.logo}>{text}</div>
    </>
  );
}

export default Logo;
