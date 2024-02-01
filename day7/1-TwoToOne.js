//day 7/366
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript

//forget to commit the previous day's solution

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}
