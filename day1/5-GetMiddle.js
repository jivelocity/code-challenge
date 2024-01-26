//day 1/366
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// function getMiddle(s) {
//   let length = s.length;
//   if (length === 1) {
//     return s;
//   } else if (length % 2 === 1) {
//     const midIndex = (length - 1) / 2;
//     return s[midIndex];
//   } else {
//     const from = length / 2 - 1;
//     const to = length / 2 + 1;
//     return s.substring(from, to);
//   }
// }

function getMiddle(s) {
  const length = s.length;
  const midIndex = Math.floor(length / 2);

  return length === 1
    ? s
    : length % 2 === 1
    ? s[midIndex]
    : s.substring(midIndex - 1, midIndex + 1);
}

console.log(getMiddle("middle"));

// New Insight
// Math.floor = membulatkan angka ke nilai terdekat
// Math.ceil = membulatkan angka selalu ke atas
// Math.trunc = membulatkan angka selalu ke bawah

// Perbedaan substring dan slice
// substring tidak menerima nilai negatif
// slice jika nilai pertama lebih besar akan return array kosong
// slice bisa buat array dan string, substring cuman untuk string
