// day 31/366
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript

// function persistence(num) {
//   let count = 0;
//   while (num.toString().length > 1) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((a, b) => a * b);
//     count++;
//   }
//   return count;
// }

function persistence(num) {
  let count = 0;

  while (num.toString().length > 1) {
    num = num.toString().split("");
    let product = 1;
    for (let i = 0; i < num.length; i++) {
      product *= parseInt(num[i]);
    }
    num = product;
    count++;
  }

  return count;
}

//explain
//initialize a count variable to 0
//while the length of the input number converted to a string is greater than 1
//convert the input number to a string and split it into an array of characters
//initialize a product variable to 1
//iterate through the array of characters
//multiply the product variable by the current character converted to an integer
//set the input number to the product variable
//increment the count variable
//return the count variable
//time complexity is O(n^2) because we iterate through the input number twice in the worst case
