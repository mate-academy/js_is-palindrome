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
  if (!str) {
    return true;
  }

  const input = str.match(/\w/g).join('').toLowerCase();

  let lettersMatches = 0;

  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] === input[input.length - (i + 1)]) {
      lettersMatches++;
    }
  }

  return lettersMatches >= input.length / 2;
}

module.exports = isPalindrome;
