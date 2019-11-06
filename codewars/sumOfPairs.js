// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the sum.
// sum_pairs([10, 5, 2, 3, 7, 5], 10) => [3, 7]

const sumPairs = (array, targetSum) => {
  const sumPairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      if (currentSum === targetSum) {
        sumPairs.push({ [i]: array[i], [j]: array[j] });
      }
    }
  }

  if (sumPairs.length === 0) {
    return undefined;
  }

  const maxIndexOfSumPairs = sumPairs.map(sumPair => {
    return Math.max(...Object.keys(sumPair));
  });

  let minIndex = 0;
  let minNum = Infinity;
  for (const [index, num] of maxIndexOfSumPairs.entries()) {
    if (num < minNum) {
      minNum = num;
      minIndex = index;
    }
  }
  return Object.values(sumPairs[minIndex]);
};

sumPairs([10, 5, 2, 3, 7, 5], 10);

var sum_pairs = function(ints, s) {
  if (ints.length < 2) return undefined; //not enough numbers for pair.
  let intSet = new Set();
  intSet.add(ints[0]);
  for (let i = 1; i < ints.length; ++i) {
    let needed = s - ints[i];
    if (intSet.has(needed)) {
      //check if we have already seen the number needed to complete the pair.
      return [needed, ints[i]];
    }
    intSet.add(ints[i]); //if not insert the number in set and continue.
  }
  return undefined; //No answer found
};

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));
