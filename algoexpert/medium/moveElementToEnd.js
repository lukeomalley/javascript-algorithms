/**
 * You are given an array of integers and an integer. Write a function that moves all
 * instances of that integer to in the array to the end of the array. The function should
 * perform this action in place and does not need to maintain the order of the other integers
 *
 * Sample Input: [2, 1, 2, 2, 2, 1, 4, 5, 2, 2, 1], 2
 * Sample Output: [1, 1, 4, 5, 1, 2, 2, 2, 2, 2, 2]
 *
 * Solution
 * Keep track of a pointer at the start and end of the array. Move the second pointer until you see a
 * numver that you can swap. Then move the first pointer until you see the number you want to move to the end.
 * When the first pointer === toMove and the second pointer !== toMove. Swap them.
 *
 * Time: O(n)
 * Space: O(1)
 */
const moveElementToEnd = (array, toMove) => {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }

    if (array[i] === toMove) {
      swap(i, j, array);
    }

    i++;
  }

  return array;
};

const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
};

console.log(moveElementToEnd([2, 2, 2, 2, 3, 4, 5, 2, 1, 1], 2));
