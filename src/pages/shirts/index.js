import AllPosts from "@/components/posts/all-post";
import { getSelectedItems } from "@/lib/item-util";

function Shirts(props) {
  return (
    <>
      <AllPosts title="Shirts" items={props.items} />
    </>
  );
}

export default Shirts;

export async function getStaticProps() {
  const selectedItems = await getSelectedItems("shirts");

  return {
    props: {
      items: selectedItems,
    },
  };
}
