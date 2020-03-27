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

  const strWithoutSym = str.toLowerCase().match(/[a-z]/g);
  let strPart1;
  let strPart2;
  const len = strWithoutSym.length;

  if (len % 2 === 0) {
    strPart1 = strWithoutSym.slice(0, len / 2).join('');
    strPart2 = strWithoutSym.slice(-(len / 2)).reverse().join('');
  } else {
    strPart1 = strWithoutSym.slice(0, (len / 2) - 1).join('');
    strPart2 = strWithoutSym.slice(-(len / 2) + 1).reverse().join('');
  }

  return strPart1 === strPart2;
}

module.exports = isPalindrome;
