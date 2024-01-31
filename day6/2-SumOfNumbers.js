//day 6/366
// https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript
// new insights:
// - Math.abs() function returns the absolute value of a number, that is
// - Math.abs(-1);  // 1
// - Math.abs(-2);  // 2
// - Math.abs(-3);  // 3

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
