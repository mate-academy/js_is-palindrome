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
function isPalindrome(string) {
  const replacedString = string.replace(/[^a-z]/gi, '');
  const reversedString = replacedString.split('').reverse().join('');
  const expression = new RegExp(`${replacedString}`, 'i');
  return expression.test(reversedString);
}

module.exports = isPalindrome;
