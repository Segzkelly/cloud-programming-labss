const normalize = pipe(
  s => s.trim(),
  s => s.toLowerCase(),
  s => s.replace(/\s+/g, " ")
);

console.log(normalize("  Hello   WORLD "));
