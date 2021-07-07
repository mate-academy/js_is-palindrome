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
  const charMask = /[A-Za-z]/;
  let firstIndex = 0;
  let lastIndex = str.length - 1;

  while (firstIndex <= lastIndex) {
    if (!str[firstIndex].match(charMask)) {
      firstIndex += 1;
      continue;
    }

    if (!str[lastIndex].match(charMask)) {
      lastIndex -= 1;
      continue;
    }

    if (str[firstIndex].toLowerCase() !== str[lastIndex].toLowerCase()) {
      return false;
    }

    firstIndex++;
    lastIndex--;
  }

  return true;
}

module.exports = isPalindrome;
