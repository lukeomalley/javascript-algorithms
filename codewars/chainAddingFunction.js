function add(a) {
  return (function(b) {
    if (b !== undefined) {
      return a + b;
    }
    return a;
  })(a);
}

console.log(add(1));
