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
  if (!str) {
    return true;
  }

  const readyStr = str.toLocaleLowerCase().match(/[a-zA-Z]/g).join('');
  const count = Math.floor(readyStr.length / 2);

  for (let i = 0; i < count; ++i) {
    if (readyStr[i] !== readyStr[readyStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
