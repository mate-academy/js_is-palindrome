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
  // write code here
  const string = str.toLowerCase();

  const pattern = /[^A-Za-z0-9]/gi;
  const strg = string.replace(pattern, '');

  const reversestrgArr = strg.split('');

  const reversestrg = reversestrgArr.reverse().join('');

  if (strg === reversestrg) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
