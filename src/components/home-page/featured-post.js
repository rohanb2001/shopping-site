import PostsGrid from "../posts/post-grid";
import classes from "./featured-post.module.css";

function FeaturedPost(props) {
  return (
    <>
      <div className={classes.heading}>
        <h1>New Arrivals</h1>
      </div>
      <PostsGrid items={props.items} isLoading="true" />
    </>
  );
}

export default FeaturedPost;
