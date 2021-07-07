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
  let palindrome = false;

  if (str.length === 0) {
    palindrome = true;
  } else {
    const normalizeStr = str.toLowerCase().match(/[a-z]/g);
    let counter = 0;

    for (let i = 0; i < normalizeStr.length; i++) {
      if (normalizeStr[i] === normalizeStr[normalizeStr.length - 1 - i]) {
        counter++;
      }
    }

    if (normalizeStr.length === counter) {
      palindrome = true;
    }
  }

  return palindrome;
}

module.exports = isPalindrome;
