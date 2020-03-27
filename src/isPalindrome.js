'use strict';

/**
 * Implement isPalindrome function:
 *
 * A palindrome is a word, phrase, or other sequence of characters which reads
 * the same backward as forward, such as 'madam' or 'racecar'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases. Empty string is a valid
 * palindrome.
 *
 *
 * isPalindrome('A man, a plan, a canal: Panama') === true
 * isPalindrome('race a car') === false
 *
 * @param {string} str
 *
 * @return {boolean}
 */
function isPalindrome(str) {
  const letters = [];
  const reversedLetters = [];

  for (const char of str) {
    if (char.match(/[a-z]/i) !== null) {
      letters.push(char.toLowerCase());
      reversedLetters.unshift(char.toLowerCase());
    }
  }

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== reversedLetters[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
