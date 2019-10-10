function isIsogram(str) {
  let array = str.toLowerCase().split('');
  let set = [...new Set(array)];
  if (set.length === array.length) return true;
  return false;
}

// 29 XXIX

function numToRoman(num) {
  let result = '';
  let romans = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  for (i in romans) {
    while (num >= romans[i]) {
      result += i;
      num -= romans[i];
    }
  }
  return result;
}

console.log(numToRoman(2019));
