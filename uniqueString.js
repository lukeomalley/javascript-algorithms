const strings = [`hello`, `abcdefghijklmnopqrstuvwxyz`, `abcdefghijklmnopqrstuvwxyzz`, `heLlo`];

function isUnique(string) {
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string.charAt(i) === string.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}

console.log(strings.map(isUnique));
