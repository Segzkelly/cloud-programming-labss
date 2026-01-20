const pipe = (...fns) => x =>
  fns.reduce((v, fn) => fn(v), x);

console.log(pipe(x => x + 1, x => x * 2)(3));
