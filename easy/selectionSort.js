const testArray = [9, 3, 6, 8, 2, 6, 4, 6, 8, 9, 4, 10, 5, 9];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[i] !== arr[min]) {
      [arr[i] = arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

function swap(arr, i, j) {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}

console.log(selectionSort(testArray));
