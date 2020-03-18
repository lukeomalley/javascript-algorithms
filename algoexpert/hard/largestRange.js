/**
 * Write a function that takes in an array of integers and returns an array of length 2 representing
 * the largest range of numbers contained in that array. The first number in the output array
 * should be the first number in the range while the second number should be the last number
 * in the range. A range of numbers is defined as a set of numbers that come right after each
 * other in the set of real integers. For instance, the output array [2, 6] represents the
 * range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers do not need to be ordered or
 * adjacent in the array in order to form a range. Assume that there will only be one largest range.
 *
 * Sample Input: Sample input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
 * Sample Output: [0, 7]
 *
 * Solution
 * Construct a hash map of all the numbers in the array. Each key in the map will point to a boolean
 * of whether or not it has been 'explored'. Loop over the array one more time and check if the range
 * around each number is in the hash map. If it is set that keys value to false.
 *
 * Time: O(n)
 * Space: O(n)
 *
 */

const largestRange = array => {
  let largestRangeLength = 0;
  let largestRange = [];
  const numMap = {};
  for (const num of array) {
    numMap[num] = true;
  }

  for (const num of array) {
    if (!numMap[num]) {
      continue;
    }

    let currentRangeLength = 1;
    let right = num + 1;
    let left = num - 1;

    while (right in numMap) {
      numMap[right] = false;
      currentRangeLength += 1;
      right += 1;
    }

    while (left in numMap) {
      numMap[left] = false;
      currentRangeLength += 1;
      left -= 1;
    }

    if (currentRangeLength > largestRangeLength) {
      largestRangeLength = currentRangeLength;
      largestRange = [left + 1, right - 1];
    }
  }
  return largestRange;
};

console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
