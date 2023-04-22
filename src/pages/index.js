import classes from "../styles/button.module.css";

import CategoriesContent from "@/components/home-page/categories-content";
import FeaturedPost from "@/components/home-page/featured-post";

import { useContext } from "react";
import LoadMoreContext from "@/context/loadMore-context";

export default function Home() {
  const { updateValue, visibleData, allItemsLength, loadContent } =
    useContext(LoadMoreContext);

  return (
    <>
      <CategoriesContent />
      <FeaturedPost items={loadContent} />
      {allItemsLength > visibleData && (
        <div className={classes.actions}>
          <button onClick={updateValue}>Load More</button>
        </div>
      )}
    </>
  );
}

// export function getStaticProps() {

//   return {
//     props: {
//       items: limitedPostsCtx.loadContent,
//     },
//   };
// }
