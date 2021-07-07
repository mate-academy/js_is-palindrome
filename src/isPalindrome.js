'use strict';

function isPalindrome(str) {
  if (!str) {
    return true;
  }

  const regexp = /\w/g;
  const strMatch = str.match(regexp);

  const string = strMatch.join('').toLowerCase();
  const reverseString = strMatch.reverse().join('').toLowerCase();

  return string === reverseString;
}

module.exports = isPalindrome;
