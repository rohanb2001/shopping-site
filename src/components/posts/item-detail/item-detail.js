import Image from "next/image";
import classes from "./item-detail.module.css";
import ContentDetails from "./content-detail";

function ItemDetails(props) {
  const imagePath = `/images/item/shirts-1.jpg`;

  return (
    <>
      <div className={classes.contentContainer}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt="image"
            width={450}
            height={450}
            layout="responsive"
            priority
          />
        </div>
        <ContentDetails post={props.post} />
      </div>
    </>
  );
}

export default ItemDetails;
