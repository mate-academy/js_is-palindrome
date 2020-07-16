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
  if (str === '') {
    return true;
  }

  const fixStr = /[A-Za-z]/g;
  const splittedStr = str.toLowerCase().match(fixStr);
  let counter = 0;

  if (!splittedStr) {
    return false;
  }

  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i] === splittedStr[splittedStr.length - i - 1]) {
      counter++;
    }
  }

  return splittedStr.length === counter;
}

module.exports = isPalindrome;
