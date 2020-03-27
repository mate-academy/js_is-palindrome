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
  const string = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const lastIndex = string.length - 1;

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[lastIndex - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
