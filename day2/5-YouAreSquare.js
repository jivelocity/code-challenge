// var isSquare = function (n) {
//   return Math.sqrt(n) % 1 === 0;
// };

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};
// var isSquare = function (n) {
//   return Math.sqrt(n) === ~~Math.sqrt(n);
// };
// var isSquare = function (n) {
//   return Math.sqrt(n) === parseInt(Math.sqrt(n));
// };
// var isSquare = function (n) {
//   return Math.sqrt(n) === Math.floor(Math.sqrt(n));
// };

console.log(isSquare(4));
