import AllPosts from "@/components/posts/all-post";
import { getSelectedItems } from "@/lib/item-util";

function TShirts(props) {
  return (
    <>
      <AllPosts title="T-Shirts" items={props.items} />
    </>
  );
}

export default TShirts;

export async function getStaticProps() {
  const selectedItems = await getSelectedItems("t-shirts");

  return {
    props: {
      items: selectedItems,
    },
  };
}
