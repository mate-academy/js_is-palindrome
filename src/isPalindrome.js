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

  const pattern = /\w/g;
  const textModifed = str.toLowerCase().match(pattern);
  const textModifedLength = textModifed.length;
  const textModifedRight = textModifed.splice(Math.ceil(textModifedLength / 2));
  let textModifedLeft = '';

  if (textModifedLength % 2 !== 0) {
    textModifed.splice(-1, 1);
  }

  textModifedLeft = textModifed;

  const resLeft = textModifedLeft.join('');
  const resRight = textModifedRight.reverse().join('');
  const checkPalindrome = resLeft === resRight;

  return checkPalindrome;
}

module.exports = isPalindrome;
