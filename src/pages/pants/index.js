import AllPosts from "@/components/posts/all-post";
import { getSelectedItems } from "@/lib/item-util";

function Pants(props) {
  return (
    <>
      <AllPosts title="Pants" items={props.items} />
    </>
  );
}

export default Pants;

export async function getStaticProps() {
  const selectedItems = await getSelectedItems("pants");

  return {
    props: {
      items: selectedItems,
    },
  };
}
