import classes from "./post-grid.module.css";
import PostItem from "./post-item";

function PostsGrid() {
  return (
    <>
      <ul className={classes.grid}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ul>
      <div className={classes.actions}>
        <button>Load More</button>
      </div>
    </>
  );
}

export default PostsGrid;
