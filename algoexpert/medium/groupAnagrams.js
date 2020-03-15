/**
 * Group Anagrams
 *
 * Write a function that takes in an array of strings and returns a list of groups of anagrams.
 * Anagrams are strings made up of exactly the same letters, where order doesn't matter.
 * For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.
 * Note that the groups of anagrams don't need to be ordered in any particular way.
 *
 * Sample input: ["yo", "act", "flop", "tac", "cat", "oy", "olfp"]
 * Sample output: [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"]]
 *
 *
 * Solution
 * Build a hash map of all the sorted words
 *
 * Time: O(w * nlog(n)) where w is the number of words and n is the length of the longest word
 * Space: O(n)
 */

const groupAnagrams = words => {
  const anagrams = {};

  for (const word of words) {
    const sortedWord = word
      .split('')
      .sort()
      .join('');

    if (sortedWord in anagrams) {
      anagrams[sortedWord] = [...anagrams[sortedWord], word];
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
};
