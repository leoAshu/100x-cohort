/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()

  validChars = []
  for (let i=0; i<str.length; i++) {
    const charCode = str[i].charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      validChars.push(str[i])
    }
  }
  str = validChars.join('')

  return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;
