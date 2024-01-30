// day 5/366
//https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }

function maskify(cc) {
  let result = "";
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      result += "#";
    } else {
      result += cc[i];
    }
  }
  return result;
}
