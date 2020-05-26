'use strict';

function isPalindrome(str) {
  if (!str) {
    return true;
  }

  const regexp = /\w/g;

  const string = str.match(regexp).join('').toLowerCase();
  const reverseString = str.match(regexp).reverse().join('').toLowerCase();

  return string === reverseString;
}

module.exports = isPalindrome;
