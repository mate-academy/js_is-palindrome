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
  const regStr = /\w/g;

  if (str === '') {
    return true;
  }

  const lowerStr = (str.toLowerCase()).match(regStr);
  const reverseLowerStr = ((str.toLowerCase()).match(regStr)).reverse();

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] !== reverseLowerStr[i]) {
      return false;
    } else if (i === lowerStr.length - 1) {
      return true;
    }
  }
}

module.exports = isPalindrome;
