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

  const strOfLetters = str.toLowerCase().replace(/[\s.,-:`'&!@#$%^&*()_+=-]/g, '');
  const strFirstWord = strOfLetters.slice(0, (strOfLetters.length / 2));
  const strSecondtWord = strOfLetters.slice(Math.ceil(strOfLetters.length / 2));


  if (strFirstWord.split("").reverse().join("") === strSecondtWord) {
    return true;
  }

  return false;
}




module.exports = isPalindrome;
