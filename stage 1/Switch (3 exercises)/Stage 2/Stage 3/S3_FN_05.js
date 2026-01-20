const atLeast = min => n => n >= min;

console.log([1, 5, 10].filter(atLeast(5)));
