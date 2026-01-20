const compose = (...fns) => x =>
  fns.reduceRight((v, fn) => fn(v), x);

console.log(compose(x => x * 2, x => x + 1)(3));
