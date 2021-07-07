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
  if (str === '') {
    return true;
  }

  const regex = /[^\W_]/g;
  const sentence = str.match(regex).join('').toLowerCase();
  let sentenceReversed = '';

  for (let i = sentence.length - 1; i >= 0; i--) {
    sentenceReversed += sentence[i];
  }

  return sentenceReversed === sentence;
}

module.exports = isPalindrome;
