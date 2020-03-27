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

  const strWithoutSim = str.toLowerCase().match(/[a-z]/g);
  let str1;
  let str2;
  const len = strWithoutSim.length;

  if (len % 2 === 0) {
    str1 = strWithoutSim.slice(0, len / 2).join('');
    str2 = strWithoutSim.slice(-(len / 2)).reverse().join('');
  } else {
    str1 = strWithoutSim.slice(0, (len / 2) - 1).join('');
    str2 = strWithoutSim.slice(-(len / 2) + 1).reverse().join('');
  }

  return str1 === str2;
}

module.exports = isPalindrome;
