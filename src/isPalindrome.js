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
  let backwardsStr = '';
  const forCheckStr = str.toLowerCase().replace(/[^a-z]/g, '');

  for (let i = forCheckStr.length; i >= 1; i--) {
    backwardsStr += forCheckStr[i - 1];
  }

  return forCheckStr === backwardsStr;
}

module.exports = isPalindrome;
