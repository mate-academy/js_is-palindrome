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
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (", '-:".includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i].toUpperCase() !== arr[arr.length - 1 - i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
