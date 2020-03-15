/**
 * Write a function that takes in a non-emptyarray of distinct integers and an integer
 * representing a target sum. The function should find all quadruplets in the array
 * that sum up to the target sum and return a 2-d array of all these quadruplets in no particular
 * order. If no four numbers sum to the targetSum the function should return an empty array
 *
 * Sample Input: [7, 6, 4, -1, 1, 2], 16
 * Sample Output: [[7, 6, 4, -1], [7, 6, 1, 2]]
 *
 * Time: AVG O(n^2), WORST: O(n^3)
 * Space: O(n^2)
 */
const fourNumberSum = (array, targetSum) => {
  const result = [];
  const sumPairs = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let currentDiff = targetSum - currentSum;
      if (currentDiff in sumPairs) {
        sumPairs[currentDiff].forEach(pair => {
          result.push([...pair, array[i], array[j]]);
        });
      }
    }

    for (let j = 0; j < i; j++) {
      let currentSum = array[i] + array[j];
      if (currentSum in sumPairs) {
        sumPairs[currentSum].push([array[i], array[j]]);
      } else {
        sumPairs[currentSum] = [[array[i], array[j]]];
      }
    }
  }

  return result;
};

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));
