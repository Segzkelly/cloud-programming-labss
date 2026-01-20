const pipeSafe = (...fns) => input => {
  try {
    return { ok: true, value: fns.reduce((v, fn) => fn(v), input) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};

const safe = pipeSafe(
  x => x + 1,
  x => { if (x > 5) throw new Error("Too big"); return x; }
);

console.log(safe(3));
console.log(safe(10));
