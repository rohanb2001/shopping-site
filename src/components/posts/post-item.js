import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

function PostItem(props) {
  const { name, title, price } = props.item;

  const imagePath = `/images/item/shirts-1.jpg`;
  const linkPath = `/${title}/${name}`;

  return (
    <>
      <li className={classes.post}>
        <Link href={linkPath}>
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
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PostItem;
