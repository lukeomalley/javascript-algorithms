function count(n, array) {
  return array.reduce((acc, num) => {
    if (num < n && num > 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

console.log(count(30, [-1, -2, 3, 4, 5, 6]));
