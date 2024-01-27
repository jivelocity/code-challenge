//day 2/366
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript
//New Insight
//fill

// function accum(s) {
//   const newS = [];

//   s.toLowerCase()
//     .split("")
//     .map((x) => {
//       newS.push(x.toUpperCase() + x.repeat(s.indexOf(x)));
//     });

//   return newS;
// }
// function accum(s) {
//   const newS = [];

//   s.toLowerCase()
//     .split("")
//     .forEach((x, index) => {
//       const repeatedChars = Array(index + 1)
//         .fill(x)
//         .join("");
//       newS.push(repeatedChars.charAt(0).toUpperCase() + repeatedChars.slice(1));
//     });

//   return newS.join("-");
// }

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("abZdacde"));
