function dragonSequence(arr) {
  const binArrLength = arr.length + 1;
  let result = [];
  let binArr = [];
  let bin = 1;
  for (let i = 0; i < binArrLength; i++) {
    binArr.push(bin);
    bin === 1 ? (bin = 0) : (bin = 1);
  }

  for (num of binArr) {
    result.push(num);
    if (!arr.length < 1) {
      result.push(arr.shift());
    }
  }
  console.log(result.join());
}

dragonSequence([1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]);
