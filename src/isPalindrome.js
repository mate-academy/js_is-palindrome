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
  const reg = RegExp(/[^\w]/g);
  const joinedStr = str.replace(reg, '');
  let reversedStr = '';

  for (let i = joinedStr.length - 1; i >= 0; i--) {
    reversedStr += joinedStr[i];
  }

  return joinedStr.toLocaleLowerCase() === reversedStr.toLocaleLowerCase();
}

module.exports = isPalindrome;
