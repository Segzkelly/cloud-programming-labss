function classifyNumberLike(x) {
  if (typeof x === "number" && Number.isNaN(x)) return "nan";
  if (typeof x === "number") return "number";
  return "not-a-number";
}

[NaN, 0, "0", "abc", undefined].forEach(v =>
  console.log(v, "→", classifyNumberLike(v))
);
