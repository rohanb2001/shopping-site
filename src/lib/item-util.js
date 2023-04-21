export async function getAllPosts() {
  const allItemsData = await fetch("http://localhost:3000/getAllitems");

  const allItems = await allItemsData.json();
  return allItems;
}

export async function getSelectedItems(category) {
  const selectedCategory = await fetch(`http://localhost:3000/${category}`);

  const selectedItems = await selectedCategory.json();
  return selectedItems;
}
