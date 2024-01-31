// day 6/366
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript
// new insights:
// - sort() method sorts the elements of an array in place and returns the sorted array.
// - slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
// - reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// function sumTwoSmallestNumbers(numbers) {
//   let min1 = numbers[0];
//   let min2 = numbers[1];
//   for (let i = 2; i < numbers.length; i++) {
//     if (numbers[i] < min1) {
//       min2 = min1;
//       min1 = numbers[i];
//     } else if (numbers[i] < min2) {
//       min2 = numbers[i];
//     }
//   }
//   return min1 + min2;
// }

function sumTwoSmallestNumbers(numbers) {
  //Code here
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}
