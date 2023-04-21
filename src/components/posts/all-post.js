import classes from "./all-post.module.css";
import PostsGrid from "./post-grid";

function AllPosts(props) {
  const { title } = props;

  return (
    <>
      <section className={classes.posts}>
        <h1>{title}</h1>
        <PostsGrid />
      </section>
    </>
  );
}

export default AllPosts;
