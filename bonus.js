function bonuses(arr) {
  let bonus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      bonus.push(3);
    } else if (arr[i - 1] < arr[i] || arr[i + 1] < arr[i]) {
      bonus.push(2);
    } else {
      bonus.push(1);
    }
  }
  return bonus;
}

console.log(bonuses([1, 2, 3, 2, 3, 5, 1]));
