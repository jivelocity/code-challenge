//day 10/366
// from twitter challenge

// str = "Ma$dam, @.in 3Ede*n, 4I'm-Ada#m";
str = "Kasur nababa@n rusa#$k";

// output must be true

function isPolindrome(str) {
  // remove special characters, dont use regex
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/)) {
      newStr += str[i].toLowerCase();
    }
  }
  // compare the string
  let start = 0;
  let end = newStr.length - 1;
  while (start < end) {
    if (newStr[start] !== newStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(isPolindrome(str));
