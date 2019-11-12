// avaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
// // A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// // Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// // We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// // We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
  let regEx = /[^A-Za-z0-9]/g;
  let newStr = str.replace(regEx,"").toLowerCase();

  let reverseStr = newStr;
  let arr = reverseStr.split('');

  let newArr = arr.reverse();
  reverseStr = newArr.join('');

  if (newStr === reverseStr) {
    return document.getElementById('outputText').innerHTML = "True";
  } else {
    return document.getElementById('outputText').innerHTML = "False";
  }
}

// palindrome("eye");
