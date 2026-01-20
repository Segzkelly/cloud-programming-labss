const parse = line => {
  const [level, rest] = line.split(": ");
  return { level, user: rest?.split("=")[1] };
};

const pipeline = pipe(
  lines => lines.map(parse),
  items => items.filter(i => i.level === "INFO"),
  items => items.map(i => i.user)
);

console.log(pipeline([
  "INFO: user=42",
  "WARN: user=7"
]));
