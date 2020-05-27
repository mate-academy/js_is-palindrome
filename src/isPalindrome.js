'use strict';

function isPalindrome(str) {
  if (!str) {
    return true;
  }

  const regexp = /\w/g;
  const stringArray = str.match(regexp);

  const string = stringArray.join('').toLowerCase();
  const reverseString = stringArray.reverse().join('').toLowerCase();

  return string === reverseString;
}

module.exports = isPalindrome;
