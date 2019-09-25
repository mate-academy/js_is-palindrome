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
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/i)) {
      letter += str[i].toLowerCase();
    }
  }
  const letterLength = letter.length;

  for (let i = 0; i < (letter.length) / 2; i++) {
    if (letter[i] !== letter[letterLength - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
