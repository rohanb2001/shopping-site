import CategoriesContent from "@/components/home-page/categories-content";
import FeaturedPost from "@/components/home-page/featured-post";
import { getLimitedPosts } from "@/lib/item-util";

export default function Home(props) {
  return (
    <>
      <CategoriesContent />
      <FeaturedPost items={props.items} />
    </>
  );
}

export async function getStaticProps() {
  const limitedPosts = await getLimitedPosts(12);

  return {
    props: {
      items: limitedPosts,
    },
  };
}
