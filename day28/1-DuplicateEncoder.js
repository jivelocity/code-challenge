// day 28/366
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript

// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
//       result += "(";
//     } else {
//       result += ")";
//     }
//   }
//   return result;
// }
//explain
//convert the input string to lowercase
//initialize an empty string to store the result
//iterate through the input string
//if the current character is unique, add "(" to the result
//if the current character is a duplicate, add ")" to the result
//return the result string
//time complexity is O(n^2) because the indexOf and lastIndexOf methods have a time complexity of O(n) and they are called n times in the worst case

function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        count++;
      }
    }
    result += count > 1 ? ")" : "(";
  }
  return result;
}

//explain
//convert the input string to lowercase
//initialize an empty string to store the result
//iterate through the input string
//initialize a count variable to 0
//iterate through the input string
//if the current character is equal to the current character in the outer loop, increment the count variable
//if the count variable is greater than 1, add ")" to the result
//if the count variable is 1, add "(" to the result
//return the result string
//time complexity is O(n^2) because we iterate through the input string twice in the worst case
