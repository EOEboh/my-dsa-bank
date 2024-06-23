/** 
 Given two strings, write a function to determine if the second string is an anagram of the first.
*/

function anagramPseudo() {
  // the function should take two strings
  // check if the length of the two strings are the same, else return false
  // create frequency counter variables for both first and second string
  // loop through the first string and count the frequency at which each character appears and assign to the frequency counter variable
  // loop through the second string and compare if the character have the same frquency as with the frequency counter object, for every character found, decrement value by one
  // if no corresponding value is found, return false, else return true
}

function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let counterVar = {};

  for (let char of string1) {
    counterVar[char] = counterVar[char] ? counterVar[char] + 1 : 1;
    console.log("counterVar", counterVar);
  }
  for (let char of string2) {
    if (!counterVar[char]) {
      return false;
    } else {
      counterVar[char] -= 1;
    }
  }
  return true;
}

console.log(anagram("acc", "cce"));
