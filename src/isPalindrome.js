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
  const match = str.match(/\w/g).map(letter => letter.toLowerCase());
  const pattern = match.slice(0, Math.floor(match.length / 2));
  const regex = new RegExp(pattern, 'g');
  return regex.test(match.reverse());
}

module.exports = isPalindrome;
