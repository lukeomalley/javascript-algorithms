// TIPS Chechsum

let data = [[2, 3, 7, 8], [0, 1, 3], [9, 2, 8, 3]];
let bigData = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712],
];

// TIME n(nlog(n))
// Space (n)
const checksum = array => {
  const diffs = [];
  array.forEach(row => {
    row.sort((a, b) => a - b);
    diffs.push(row[row.length - 1] - row[0]);
  });
  return diffs.reduce((a, b) => a + b, 0);
};

const checksumBetter = array => {
  const diffs = [];
  array.forEach(row => {
    const minMax = [Infinity, 0];
    row.forEach(num => {
      if (num < minMax[0]) {
        minMax[0] = num;
      } else if (num > minMax[1]) {
        minMax[1] = num;
      }
    });
    diffs.push(minMax[1] - minMax[0]);
  });
  return diffs.reduce((a, b) => a + b, 0);
};

const checksumReduce = array => {
  return array.reduce((acc, row) => {
    return acc + (Math.max(...row) - Math.min(...row));
  }, 0);
};

console.log(checksum(data));
console.log(checksum(bigData));

console.log(checksumBetter(data));
console.log(checksumBetter(bigData));

console.log(checksumReduce(data));
console.log(checksumReduce(bigData));
