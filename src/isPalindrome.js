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
  let lineOfWords = str.toLowerCase().replace(/[^\w]/g, '');
  return lineOfWords === lineOfWords.split('').reverse().join('');
}

isPalindrome('A man, a plan, a canal: Panama');
isPalindrome('123 hello aaaccc');

module.exports = isPalindrome;
