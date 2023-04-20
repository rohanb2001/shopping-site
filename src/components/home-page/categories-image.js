import Image from "next/image";

import classes from "./categories-image.module.css";

function CategoriesImage() {
  const imagePath1 = `/images/site/style-1.png`;
  const imagePath2 = `/images/site/style-2.png`;
  const imagePath3 = `/images/site/style-3.png`;

  const altImg1 = "Image 1";
  const altImg2 = "Image 2";
  const altImg3 = "Image 3";

  return (
    <>
      <div className={classes.images}>
        <div className={classes.image}>
          <Image
            src={imagePath1}
            alt={altImg1}
            width={400}
            height={551}
            layout="responsive"
          />
        </div>
        <div className={classes.image}>
          <Image
            src={imagePath2}
            alt={altImg2}
            width={400}
            height={551}
            layout="responsive"
          />
        </div>
        <div className={classes.image}>
          <Image
            src={imagePath3}
            alt={altImg3}
            width={400}
            height={551}
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
}

export default CategoriesImage;
