// day 32/366
//https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript

// function alphabetPosition(text){
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//         let code = text.toUpperCase().charCodeAt(i)
//         if (code > 64 && code < 91) result += (code - 64) + " ";
//     }
//     return result.slice(0, result.length-1);
// }

//explain
//initialize a result variable to an empty string
//iterate through the input text
//convert the current character to its ASCII code
//if the ASCII code is between 65 and 90 (inclusive), add the ASCII code minus 64 to the result variable
//return the result variable with the last character removed
//time complexity is O(n) because we iterate through the input text once

//Anotther solution

function alphabetPosition(text) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  return text
    .toLowerCase()
    .split("")
    .filter((t) => letters.indexOf(t) > -1)
    .map((t) => letters.indexOf(t) + 1 || "")
    .join(" ");
}

//explain
//initialize a letters variable to the string "abcdefghijklmnopqrstuvwxyz"
//convert the input text to lowercase, split it into an array of characters, filter out any characters that are not letters, map the remaining characters to their index in the letters variable plus 1, and join the resulting array into a string separated by spaces
//time complexity is O(n) because we iterate through the input text once
