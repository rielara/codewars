// Find the longest word in a string: Given a string, find the longest word and return its length.

function findLongestWordLength(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord.length;
  }