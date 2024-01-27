//day 2/366
//https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript
// new insight
// Tipe data Set

function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  const charSet = new Set();

  for (const char of lowerStr) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

console.log(isIsogram("Dermatoglyphicsdw"));
