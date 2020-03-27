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
  const ars = str.replace(/[^a-zA-Z]/gi, '').replace(/\s+/gi, '').toLowerCase();

  const middle = (ars.length - 1) / 2;
  const firstPart = ars.slice(0, middle);
  const middle2 = middle + 1;
  const secondPart = ars.slice(middle2).split('').reverse().join('');

  if (firstPart === secondPart) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
