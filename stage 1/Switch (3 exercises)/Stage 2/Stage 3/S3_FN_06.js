const mapValues = (obj, fn) => {
  const result = {};
  for (const k in obj) {
    result[k] = fn(obj[k]);
  }
  return result;
};

console.log(mapValues({ a: 1, b: 2 }, x => x * 10));
