function typeLabel(value) {
  return value === null ? "null" : typeof value;
}

[
  null, undefined, 42, "42", true, {}, [], (() => {})
].forEach(v => console.log(typeLabel(v)));
