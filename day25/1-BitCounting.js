// day 25/366
//https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript
//difficult : 6kyu

// const countBits = function(n){

//   var result = 0;
//   while (n > 0) {
//     result += n % 2;
//     n = Math.floor(n / 2);
//   }
//   return result;

// }

//explain
// create a variable to store the result
// iterate through the input number
// add the remainder of dividing the input number by 2 to the result
// divide the input number by 2 and round down
// return the result
// time complexity is O(log n) because we divide the input number by 2 in each iteration
// The above solution is not the most efficient one. The following solution is more efficient and uses the built-in toString method to convert the input number to binary. It then splits the binary string into an array and filters it to only include the 1s. It returns the length of the filtered array.

const countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((element) => element === "1").length;
};

//explain
// convert the input number to binary
// split the binary string into an array
// filter the array to only include the 1s
// return the length of the filtered array
// time complexity is O(log n) because we convert the input number to binary
