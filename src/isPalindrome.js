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
  const result = str.toLowerCase().match(/[a-z]/g, '');
  if (result === null) {
    return true;
  } else if (result.length !== 0) {
    const index = Math.ceil(result.length / 2);
    const leftPalindrome = result.slice(0, index).join('');
    const rightPalindrome = result.slice(-index).reverse().join('');
    if (leftPalindrome === rightPalindrome) {
      return true;
    }
  }
  return false;
}

module.exports = isPalindrome;
