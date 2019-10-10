const test = [7, 5, 7, 8, 4, 2, 1, 6, 8, 2];

function insertionSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j -= 1;
    }
    i += 1;
  }
  return arr;
}

console.log(insertionSort(test));
