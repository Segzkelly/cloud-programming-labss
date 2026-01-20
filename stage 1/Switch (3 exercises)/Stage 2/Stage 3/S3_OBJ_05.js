function invert(obj) {
  const result = {};
  for (const k in obj) {
    const v = obj[k];
    if (result[v]) {
      result[v] = [].concat(result[v], k);
    } else {
      result[v] = k;
    }
  }
  return result;
}

console.log(invert({ a: 1, b: 2, c: 1 }));
