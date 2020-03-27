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
  if (str.length === 0) {
    return true;
  }

  const lowerCase = str.toLowerCase();
  const withoutPunMark = lowerCase.match(/([A-Za-z])/g);
  const center = Math.floor(withoutPunMark.length / 2);

  for (let i = 0; i <= center; i++) {
    if (withoutPunMark[i] !== withoutPunMark[withoutPunMark.length - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
