import classes from "./post-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const { items } = props;

  return (
    <>
      <ul className={classes.grid}>
        {items.map((item) => (
          <PostItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default PostsGrid;
