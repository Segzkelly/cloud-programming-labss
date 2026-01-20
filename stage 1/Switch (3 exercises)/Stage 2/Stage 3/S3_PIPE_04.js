const process = pipe(
  arr => arr.filter(x => !Number.isNaN(+x)),
  arr => arr.map(Number),
  arr => arr.map(x => x * 2),
  arr => arr.reduce((a, b) => a + b, 0)
);

console.log(process(["1", "x", "2"]));
