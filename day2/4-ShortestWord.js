// days 2/366
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript

function findShort(s) {
  let arr = s.split(" ");
  let shortest = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest) {
      shortest = arr[i].length;
    }
  }
  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
