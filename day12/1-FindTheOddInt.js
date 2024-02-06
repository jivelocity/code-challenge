// day 12/366
//https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

// Given an array, find the int that appears an odd number of times.

function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return A[i];
    }
  }
  return 0;
}

//explain
// declare a variable count and set it to 0
// iterate through the array
// iterate through the array again
// if the current element is equal to the other element, increment count
// if count is odd, return the current element
// return 0 if no element is found
// time complexity is O(n^2)
