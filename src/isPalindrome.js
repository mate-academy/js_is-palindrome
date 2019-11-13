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
  const onlyChars = str.match(/\w/g).join('').toLowerCase();
  const halfIndex = Math.trunc(onlyChars.length / 2);
  const firsHalf = onlyChars.slice(0, halfIndex);
  const secondHalf = onlyChars.slice(onlyChars.length - halfIndex);
  return firsHalf === secondHalf.split('').reverse().join('');
}

module.exports = isPalindrome;
