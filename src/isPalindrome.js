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
  }// I don't understand how to do this more simply
  const resultOfMatch = str.match(/\w/g);
  const reverseResultOfMatch = str.match(/\w/g).reverse();
  let firstHalfOfString;
  let secondHalfOfString;
  const lengthDivideByTwo = resultOfMatch.length % 2;
  const cutEvenArray = (array) => array.slice(0, resultOfMatch.length / 2)
    .map(letter => letter.toLowerCase()).join('');
  const cutOddArray = (array) => array.slice(0, (resultOfMatch.length - 1) / 2)
    .map(letter => letter.toLowerCase()).join('');

  if (lengthDivideByTwo === 0) {
    firstHalfOfString = cutEvenArray(resultOfMatch);
    secondHalfOfString = cutEvenArray(reverseResultOfMatch);
  } else if (lengthDivideByTwo === 1) {
    firstHalfOfString = cutOddArray(resultOfMatch);
    secondHalfOfString = cutOddArray(reverseResultOfMatch);
  }

  return firstHalfOfString === secondHalfOfString;
}

module.exports = isPalindrome;
