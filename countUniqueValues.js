/**
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 */

function countUniqueValuesPseudo() {
  // the function should accept a sorted array
  // create two pointers that initially represents the first member and second member respectively
  // create a loop
  // inside the loop:
  // if 2nd pointer value is equal to that of the 1st pointer, then increment the index of the 2nd pointer
  // if 2nd pointer value is not equal to that of the 1st pointer, then increment the index of the 1st pointer and replace the value with that of the 2nd pointer
  // once the last member of the array is reached, then sum all the number of elements up to the 1st pointer and return the array
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      console.log("values", i, j);
    }
  }
  return i + 1;
}

console.log("countunique", countUniqueValues([2, 2, 2, 5, 8, 7, 99]));
