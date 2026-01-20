const nums = [1, 2, 3, 4];

const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((a, b) => a + b, 0);

console.log(result);
