//day 27/366
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/javascript

// function findOutlier(integers) {
//   let odd = integers.filter((a) => a % 2 !== 0);
//   let even = integers.filter((a) => a % 2 === 0);
//   return odd.length === 1 ? odd[0] : even[0];
// }

function findOutlier(integers) {
  if (
    (integers[0] % 2 === 0 && integers[1] % 2 === 0) ||
    (integers[1] % 2 === 0 && integers[2] % 2 === 0) ||
    (integers[0] % 2 === 0 && integers[2] % 2 === 0)
  ) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        return integers[i];
      }
    }
  }
}

//explain
// if the first 3 integers are all even or all odd
// iterate through the integers
// if the integer is odd, return it
// if the integer is even, return it
// time complexity is O(n) because we iterate through the input array once
