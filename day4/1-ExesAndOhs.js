//day 4/366
//https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

function XO(str) {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }

  return x === o;
}

console.log(XO("xxXooo")); //true
