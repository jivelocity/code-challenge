// day 18/366
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript

// function createPhoneNumber(numbers) {
//   return `(${numbers.slice(0, 3).join("")}) ${numbers
//     .slice(3, 6)
//     .join("")}-${numbers.slice(6).join("")}`;
// }
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}

//explain
// create a format string
// iterate through numbers
// replace each x in format with the current number
// return format
// time complexity is O(n)
