function pick(obj, keys) {
  const result = {};
  for (const k of keys) {
    if (k in obj) result[k] = obj[k];
  }
  return result;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"]));
