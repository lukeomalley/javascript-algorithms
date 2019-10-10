// O(n^2) TIME | O(n) SPACE
const getNthFib = n => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
};

console.log(getNthFib(20));