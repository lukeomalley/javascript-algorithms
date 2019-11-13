// Given an array of integers return the three largest numbers
// threeLargest([1, 2, 3, 4, 6, 7]) => [4, 6, 7]

// O(n) TIME | O(1) SPACE
function threeLargest(array) {
  let threeLargest = [-Infinity, -Infinity, -Infinity];
  for (let num of array) {
    updateLargest(num, threeLargest);
  }
  return threeLargest;
}

function updateLargest(num, threeLargest) {
  if (num > threeLargest[2]) {
    shiftArray(num, threeLargest, 2);
  } else if (num > threeLargest[1]) {
    shiftArray(num, threeLargest, 1);
  } else if (num > threeLargest[0]) {
    shiftArray(num, threeLargest, 0);
  }
  return threeLargest;
}

function shiftArray(num, threeLargest, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      threeLargest[i] = num;
    } else {
      threeLargest[i] = threeLargest[i + 1];
    }
  }
}
