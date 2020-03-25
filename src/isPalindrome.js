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
  const abc = 'abcdefjhijklmnopqrstuvwxyz';
  const arr = [];
  const arr2 = [];
  let res = false;

  for (let i = 0; i < str.length; i++) {
    if (abc.includes(str[i].toLowerCase())) {
      arr.push(str[i].toLowerCase());
      arr2.unshift(str[i].toLowerCase());
    }
  }

  if (arr.join() === arr2.join()) {
    res = true;
  }

  return res;
}

module.exports = isPalindrome;
