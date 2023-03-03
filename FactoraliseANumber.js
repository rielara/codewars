// Factorialize a number: Given a number, return the factorial of that number.
// A factorial is the product of an integer and all the integers below it. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!

function factorialize(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
  }