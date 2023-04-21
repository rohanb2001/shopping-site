import { getLimitedPosts } from "@/lib/item-util";
import classes from "./post-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const { items, isLoading } = props;

  return (
    <>
      <ul className={classes.grid}>
        {items.map((item) => (
          <PostItem key={item.id} item={item} />
        ))}
      </ul>
      {isLoading === "false" ? (
        ""
      ) : (
        <div className={classes.actions}>
          <button>Load More</button>
        </div>
      )}
    </>
  );
}

export default PostsGrid;
