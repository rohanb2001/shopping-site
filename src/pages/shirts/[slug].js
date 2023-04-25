import ItemDetails from "@/components/posts/item-detail/item-detail";
import { getAllPosts, getSingleItem } from "@/lib/item-util";

function ItemDetailPage(props) {
  return (
    <>
      <ItemDetails post={props.post} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const itemData = await getSingleItem(slug);

  return {
    props: {
      post: itemData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const allItems = await getAllPosts();

  const slugs = allItems.map((itemName) => itemName.name);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ItemDetailPage;
