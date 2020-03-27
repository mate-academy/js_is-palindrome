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

  const regExr = /\W/g;

  const onlyLetters = str.replace(regExr, '').toLowerCase();
  let reverseStr = '';

  // or reverseStr = onlyLetters.split('').reverse().join('')
  let i = onlyLetters.length - 1;

  for (i; i >= 0; i--) {
    reverseStr += onlyLetters[i];
  }

  return onlyLetters === reverseStr;
}

module.exports = isPalindrome;
