export async function getAllPosts() {
  const allItemsData = await fetch("http://localhost:3000/getAllitems");

  const allItems = await allItemsData.json();
  return allItems;
}
