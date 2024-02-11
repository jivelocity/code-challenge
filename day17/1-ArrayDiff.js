//day 17/366
//https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript

// function arrayDiff(a,b){
//     return a.filter(x => !b.includes(x));

// }

function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}

//explain
// create an empty array to store the result
// iterate through a
// if the current element is not in b, push it to result
// return result
// time complexity is O(n*m)
