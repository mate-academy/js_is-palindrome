'use strict';

/**
 * Implement isPalindrome function:
 *
 * A palindrome is a word, phrase, or other sequence of characters which reads
 * the same backward as forward, such as 'madam' or 'racecar'
 *
 * Given a string, determine if it is a pal indrome, considering only
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
  // write code here
  if (str === '') {
    return true;
  }
  const clearedStr = str.match(/[A-Za-z]/g).join('').toLowerCase();
  const revertStr = clearedStr.split('').reverse().join('');

  return clearedStr === revertStr;
}
module.exports = isPalindrome;
