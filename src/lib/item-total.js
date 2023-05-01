export function Total(cart) {
  const totalAmount = cart.map((item) => {
    const number = Number(item.price);
    const totalAmount = number * item.count;
    return totalAmount;
  });

  const total = totalAmount.reduce((acc, curr) => acc + curr, 0);
  const formattedTotal = total.toLocaleString("en-US");

  return formattedTotal;
}
