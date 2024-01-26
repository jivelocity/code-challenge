// day 1/366
//https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript
// Guide : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
