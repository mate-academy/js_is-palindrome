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
  const pattern = /[^\W_]/g;
  const text = str.match(pattern);

  if (text === null) {
    return true;
  };

  const notReverseText = text
    .join('')
    .toLowerCase();
  const reverseText = text
    .reverse()
    .join('')
    .toLowerCase();

  return (reverseText === notReverseText);
}

module.exports = isPalindrome;
