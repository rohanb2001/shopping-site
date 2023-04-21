import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

function PostItem() {
  const imagePath = `/images/item/shirts-1.jpg`;

  return (
    <>
      <li className={classes.post}>
        <Link href="/shirts">
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt="image"
              width={300}
              height={200}
              layout="responsive"
              priority
            />
          </div>
          <div className={classes.content}>
            <h3>Fair</h3>
            <p>$879</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PostItem;
