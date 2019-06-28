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

  function stringClearing(strForClear) {
    return strForClear
      .toLowerCase()
      .match(/\w/g)
      .join('');
  }

  const clearString = stringClearing(str);

  function stringReverse(strForReverse) {
    if (strForReverse === '') {
      return '';
    }

    return stringReverse(strForReverse.substr(1)) + strForReverse[0];
  }

  const reverseClearString = stringReverse(clearString);

  function stringComparison(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    return [...str1].every((symbol, symbolIndex) =>
      symbol === [...str2][symbolIndex]);
  }

  return stringComparison(reverseClearString, clearString);
}

module.exports = isPalindrome;
