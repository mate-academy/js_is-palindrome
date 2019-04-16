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
  // write code here
  // I tried to do this task only with the help of regular expressions...
  // Here is what got.
  const alphabetStr = str.replace(/\W/g, '');
  const alphabetStrCenter = alphabetStr.length / 2;
  let testStr = '$';
  for (let i = 0; i < alphabetStrCenter; i++) {
    testStr = alphabetStr[i] + testStr;
  }
  let regExpPalindrome = new RegExp(testStr, 'i');
  return regExpPalindrome.test(alphabetStr);
}

module.exports = isPalindrome;
