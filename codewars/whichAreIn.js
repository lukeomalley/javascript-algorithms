function whichAreIn(array1, array2) {
  const result = [];
  for (substring of array1) {
    for (word of array2) {
      if (word.includes(substring)) {
        result.push(word);
      }
    }
  }
  return result.sort();
}

console.log(
  whichAreIn(['xyz', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']),
);
