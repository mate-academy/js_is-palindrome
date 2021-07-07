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
function isPalindrome(input) {
  if (input === '') {
    return true;
  }

  const str = input.match(/\w+/g).join('').toLowerCase();
  let reservedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reservedStr += str[i];
  }

  return reservedStr === str;
}

module.exports = isPalindrome;
