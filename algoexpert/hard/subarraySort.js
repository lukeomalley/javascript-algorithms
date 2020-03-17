/**
 * Subarray Sort
 *
 * Write a function that takes in an array of intergers of length at least 2. The function
 * should return an array of the starting and ending indices of the smallest subarray in the
 * input array that needs to be sorted in place in order for the entire input arrat to be sorted.
 * If the input array is already sorted, then the function should return [-1, 1]
 *
 * Sample Input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
 * Sample Output: [3,9]
 *
 * Solution:
 * Find the smallest and largest unsorted numbers in the array. Find where these numbers should
 * go in the array starting from the left and right respectively.
 *
 * Time: O(n)
 * Space: O(1)
 */

const subarraySort = array => {
  let smallestUnsorted = Number.POSITIVE_INFINITY;
  let largestUnsotred = Number.NEGATIVE_INFINITY;
  let left = 0;
  let right = array.length - 1;

  // Find the smallest and largest unsorted numbers
  for (let i = 0; i < array.length; i++) {
    if (unsorted(i, array)) {
      smallestUnsorted = Math.min(array[i], smallestUnsorted);
      largestUnsotred = Math.max(array[i], largestUnsotred);
    }
  }

  // Return if the array is already sorted
  if (smallestUnsorted === Number.POSITIVE_INFINITY) {
    return [-1, -1];
  }

  while (array[left] <= smallestUnsorted) {
    left += 1;
  }

  while (array[right] >= largestUnsotred) {
    right -= 1;
  }

  return [left, right];
};

const unsorted = (index, array) => {
  if (index === 0) {
    return array[index + 1] < array[index];
  }

  if (index === array.length - 1) {
    return array[index - 1] > array[index];
  }

  return array[index - 1] > array[index] || array[index + 1] < array[index];
};

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
console.log(subarraySort([2, 1]));
