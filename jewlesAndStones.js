const numJewelsInStones = function(J, S) {
  let jewles = J.split('');
  let stones = S.split('');
  let count = 0;

  for (jewel of jewles) {
    for (stone of stones) {
      if (stone === jewel) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones('aA', 'aaAbbbb'));
