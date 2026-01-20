function safeAdd(a, b) {
  const needsBigInt =
    Number.isInteger(a) &&
    Number.isInteger(b) &&
    (Math.abs(a) > Number.MAX_SAFE_INTEGER ||
     Math.abs(b) > Number.MAX_SAFE_INTEGER);

  if (needsBigInt) {
    const result = BigInt(a) + BigInt(b);
    console.log("Returned BigInt");
    return result;
  }

  console.log("Returned Number");
  return a + b;
}

console.log(safeAdd(1, 2));
console.log(safeAdd(9007199254740992, 1));
