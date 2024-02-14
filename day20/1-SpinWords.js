// day 20/366
//https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript

// function spinWords(string) {
//   const result = string.split(" ").map((word) => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("");
//     }
//     return word;
//   });

//   return result.join(" ");
// }
function spinWords(string) {
  const result = string.split(" ").map((word) => {
    if (word.length >= 5) {
      let reversedWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      return reversedWord;
    }
    return word;
  });

  return result.join(" ");
}

//explain
// split the string into an array of words
// iterate through the array
// if the word is longer than 5 characters, reverse it
// join the array into a string
// return the string
// time complexity is O(n)
