// day 34/366
//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let n = 0,
    s = 0,
    e = 0,
    w = 0;
  if (walk.length !== 10) return false;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") n++;
    else if (walk[i] === "s") s++;
    else if (walk[i] === "e") e++;
    else if (walk[i] === "w") w++;
  }
  return n === s && e === w;
}

//explain
//initialize variables n, s, e, and w to 0
//if the length of the input walk is not 10, return false
//iterate through the input walk
//increment the corresponding variable for each direction
//return true if n equals s and e equals w, otherwise return false
//time complexity is O(n) because we iterate through the input walk once
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //true
