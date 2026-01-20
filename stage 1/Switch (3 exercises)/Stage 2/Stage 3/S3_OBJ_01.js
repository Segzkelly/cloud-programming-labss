function get(obj, path, fallback) {
  return path.split(".").reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
    obj
  ) ?? fallback;
}

const data = { a: { b: { c: 10 } } };
console.log(get(data, "a.b.c", null));
console.log(get(data, "a.x.c", "missing"));
