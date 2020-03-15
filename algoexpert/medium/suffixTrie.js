class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endChar = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i in string) {
      this.insertSubstringStartingAt(i, string);
    }
    return null;
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      let currentChar = string[j];
      if (!(currentChar in node)) {
        node[currentChar] = {};
      }
      node = node[currentChar];
    }
    node[this.endChar] = true;
  }

  contains(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) {
        return false;
      }
      node = node[letter];
    }
    return this.endChar in node;
  }
}
