//day 1/366
//https://codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

function highAndLow(numbers) {
  const newNumbers = numbers.split(" ").map((x) => Number(x));
  let high = Math.max(...newNumbers);
  let low = Math.min(...newNumbers);

  return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"));
