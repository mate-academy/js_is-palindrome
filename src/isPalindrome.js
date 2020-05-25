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
  const strToLower = str.toLowerCase();
  const regexpOnlyLetter = /[a-z]/g;
  const strOnlyLettersArray = strToLower.match(regexpOnlyLetter);
  const strOnlyLetters = str.length > 0
    ? strOnlyLettersArray.join('')
    : undefined;

  return str.length > 0
    ? strOnlyLettersArray.reverse().join('') === strOnlyLetters
    : str.length === 0;
}

module.exports = isPalindrome;
