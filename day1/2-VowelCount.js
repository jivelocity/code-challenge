//day 1/366
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

// function getCount(str) {
//   let countVowels = 0
//   const vowels = 'aiueo'
//   str.split("").map((s) => {
//     if (vowels.includes(s)) {
//       countVowels += 1
//     }
//   })

//   return countVowels

// }

// function getCount(str) {
//   const vowels = 'aiueo'
//    let countVowels = str.split("").reduce((acc, s) => acc + (vowels.includes(s) && 1), 0)
//   return countVowels

// }

const getCount = (str) =>
  str.split("").reduce((acc, s) => acc + ("aiueo".includes(s) && 1), 0);

console.log(getCount("uiuiawww"));
