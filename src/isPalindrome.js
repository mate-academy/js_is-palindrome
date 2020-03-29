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
  const str1 = str.replace(/[,-: ']/g, '');

  for (let i = 0; i < Math.floor(str1.length / 2); i++) {
    if (str1[i].toUpperCase() !== str1[str1.length - 1 - i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
