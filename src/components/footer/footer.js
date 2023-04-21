import classes from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.socials}>
          <ul>
            <li>Shopping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className={classes.socials}>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Email</li>
          </ul>
        </div>
        <div className={classes.socials}>
          <div className={classes.mailingList}>
            <h3>Join our mailing list</h3>
            <p>and stay updated</p>
          </div>
          <form className={classes.form}>
            <div className={classes.control}>
              <input
                type="email"
                name="email"
                required
                defaultValue="Enter your email here*"
              />
            </div>
            <div className={classes.actions}>
              <button>Subscribe Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Footer;
