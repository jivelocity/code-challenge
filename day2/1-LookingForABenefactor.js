//day 2/366
//https://www.codewars.com/kata/569b5cec755dd3534d00000f/solutions/javascript

function newAvg(arr, newavg) {
  const totalArr = arr.reduce((acc, v) => acc + v, 0);
  const lastDon = Math.ceil(newavg * (arr.length + 1) - totalArr);
  if (lastDon <= 0) {
    throw new Error("Expected New Average is too low");
  } else {
    return lastDon;
  }
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92));
