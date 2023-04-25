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

export async function getLimitedPosts(limit) {
  const limitedData = await fetch(
    `http://localhost:3000/getAllitems?_limit=${limit}`
  );

  const limitedDataItems = await limitedData.json();
  return limitedDataItems;
}

export async function getSingleItem(itemIdentifier) {
  const allItems = await getAllPosts();

  const itemSlug = allItems.find((item) => {
    return item.name === itemIdentifier;
  });

  return itemSlug;
}
