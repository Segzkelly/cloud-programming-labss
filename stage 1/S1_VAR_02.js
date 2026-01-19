try {
  {
    let x = 10;
  }
  console.log(x);
} catch (e) {
  console.log("let is block-scoped:", e.message);
}

try {
  {
    var y = 20;
  }
  console.log("var works outside block:", y);
} catch (e) {
  console.log(e.message);
}

// var is function-scoped, not block-scoped
_