function goodVsEvil(good, evil) {
  const goodNums = good.split(' ');
  const evilNums = evil.split(' ');

  const goodSum =
    goodNums[0] * 1 +
    goodNums[1] * 2 +
    goodNums[2] * 3 +
    goodNums[3] * 3 +
    goodNums[4] * 4 +
    goodNums[5] * 10;
  const evilSum =
    evilNums[0] * 1 +
    evilNums[1] * 2 +
    evilNums[2] * 2 +
    evilNums[3] * 2 +
    evilNums[4] * 3 +
    evilNums[5] * 5 +
    evilNums[6] * 10;

  if (goodSum > evilSum) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else if (goodSum < evilSum) {
    return 'Battle Result: Good triumphs over Evil';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}

console.log(goodVsEvil('1 1 1 1 1 1 1', '1 1 1 1 1 1 1'));
