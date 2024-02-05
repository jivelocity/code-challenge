//day 11/366
//https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//explain
// declare a variable sum and set it to 0
// iterate from 0 to number
// if i is divisible by 3 or 5, add i to sum
// return sum
// time complexity is O(n)
