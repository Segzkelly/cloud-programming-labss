function shippingCost(weightKg, isMember) {
  let cost =
    weightKg < 1 ? 10 :
    weightKg <= 5 ? 20 : 30;

  if (isMember) cost *= 0.8;
  return cost;
}

console.log(shippingCost(3, true));
