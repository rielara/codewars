// Check for palindromes: Given a string, return true if the string is a palindrome (the same forwards and backwards), otherwise return false.

function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return str === str.split("").reverse().join("");
  }