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
  const replacedStr = str.replace(/\W/g, '')
    .toLowerCase();

  const reverseReplacedStr = replacedStr.split('')
    .reverse()
    .join('');

  if (reverseReplacedStr === replacedStr) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
