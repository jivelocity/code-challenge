//day 26/366
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript

// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .reduce((acc, letter) => {
//       acc[letter] = (acc[letter] || 0) + 1;
//       return acc;
//     }, {});
// }
function duplicateCount(text) {
  let count = 0;
  let textArr = text.toLowerCase().split("");
  let textObj = {};

  textArr.forEach((letter) => {
    if (textObj[letter]) {
      textObj[letter]++;
    } else {
      textObj[letter] = 1;
    }
  });

  for (let key in textObj) {
    if (textObj[key] > 1) {
      count++;
    }
  }

  return count;
}

//explain
// create a variable to store the count
// convert the input string to lowercase and split it into an array
// create an object to store the letters and their counts
// iterate through the array
// if the letter is already in the object, increment its count by 1
// if the letter is not in the object, add it to the object with a count of 1
// iterate through the object
// if the count of a letter is greater than 1, increment the count variable by 1
// return the count variable
// time complexity is O(n) because we iterate through the input string once
