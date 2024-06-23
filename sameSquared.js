/*
Write a function called `same`, which accepts two arrays.
The function should return true if every value in the array has its corresponding
value squared in the second array. The frequency of values must be the same.
*/

// NAIVE SOLUTION
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    let correctIndex = arr2.indexOf(arr1[index] ** 2);
    // if arr1 element is not found
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// REFACTORED SOLUTION
function samePseudo() {
  // check if the two array params have the same length and if not, return false
  // create two frequency-counter variables for the two arrays
  // create two loops for the two arrays to fill up the frequency counter variable with the frequencies of each element
  // create a third loop to compare either the first or second array with the other and check if there is a corresponding squared value
  // if the value is not found, return false
  // return true otherwise
}

// REFACTORED SOLUTION
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counterVar1 = {};
  let counterVar2 = {};

  for (let index of arr1) {
    const element = arr1[index];

    counterVar1[element] = (counterVar1[element] || 0) + 1;
  }

  for (let index of arr2) {
    const element = arr2[index];

    counterVar2[element] = (counterVar2[element] || 0) + 1;
  }

  for (let key in counterVar1) {
    if (!(key ** 2 in counterVar2)) {
      return false;
    }
    if (counterVar2[key ** 2] !== counterVar1[key]) {
      return false;
    }
  }
  return true;
}

// ALTERNATIVE REFACTORED SOLUTION
function sameSquaredPseudo3() {
  // function accepts two arrays
  // check if the length of the arrays are the same, else return false
  // create an object variable to hold the sqaured values of the first array
  // loop through the first array and assign its squared elements to the object variable as keys and the frequency the appear as values
  // loop through the second array and compare if the values exist in the object variable created earlier, if a value exists, reduce its frequency by 1
  // also check if the value does not exist or is zero, return false
  // return true otherwise
}

function sameSquared3(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let counterVar = {};

  for (let element of array1) {
    counterVar[element ** 2] = counterVar[element ** 2]
      ? counterVar[element ** 2] + 1
      : 1;
    console.log("counterVar", counterVar);
  }
  // console.log("counterVar", counterVar);
  for (let element2 of array2) {
    if (!counterVar[element2]) {
      return false;
    } else {
      counterVar[element2] -= 1;
    }
  }

  return true;
}
console.log("sameSquared3", sameSquared3([1, 2, 3, 2], [9, 1, 4, 4]));
