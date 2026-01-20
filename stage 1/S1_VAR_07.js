function toNumberOrNull(x) {
  if (typeof x === "string") {
    const n = +x;
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

["12", "12.5", " 12 ", "12x", ""].forEach(v =>
  console.log(v, "→", toNumberOrNull(v))
);
