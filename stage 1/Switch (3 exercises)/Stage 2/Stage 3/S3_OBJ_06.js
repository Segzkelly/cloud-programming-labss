function groupBy(items, key) {
  const result = {};
  for (const item of items) {
    const k = item[key];
    if (!result[k]) result[k] = [];
    result[k].push(item);
  }
  return result;
}

const users = [
  { name: "Ala", role: "admin" },
  { name: "Ola", role: "user" }
];

console.log(groupBy(users, "role"));
