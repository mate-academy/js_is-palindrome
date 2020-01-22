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
  const stringLowerCase = str.toLowerCase();
  const re = stringLowerCase.match(/\w/g);

  if (str === '') {
    return true;
  }

  if (re.join('') === re.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
