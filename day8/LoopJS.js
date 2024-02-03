// day 8/366
// project from upwork looping through an array and grouping every 3 elements into a string

let data = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
];

function loop(data) {
  let result = [];

  for (let i = 0; i < data.length; i += 3) {
    let group = data.slice(i, i + 3).join("");
    result.push(group);
  }

  return result;
}
