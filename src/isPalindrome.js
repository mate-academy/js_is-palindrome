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
  // i know about str.reverse()

  let notLatinicRegExp = /\W/g;
  let charsOnly = str.replace(notLatinicRegExp, '').toLowerCase();
  let charsOnlyReversed = charsOnly.split('').reverse().join('');
  return charsOnly === charsOnlyReversed;
};

module.exports = isPalindrome;
