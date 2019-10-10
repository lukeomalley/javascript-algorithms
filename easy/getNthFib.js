// O(n^2) TIME | O(n) SPACE
const getNthFib = n => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
};

// O(n) TIME | O(n) SPACE
const getNthFibMemoize = (n, memoize = { 1: 0, 2: 1 }) => {
  if (n in memoize) {
    return memoize[n];
  }
  memoize[n] = getNthFibMemoize(n - 1, memoize) + getNthFibMemoize(n - 2, memoize);
  return memoize[n];
};

console.log(getNthFib(20));
