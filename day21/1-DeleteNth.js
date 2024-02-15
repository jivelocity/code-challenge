// day 21/366
//https://www.codewars.com/kata/554ca54ffa7d91b236000023/solutions/javascript

// function deleteNth(arr, n) {
//   const result = [];
//   const count = {};
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     if (count[current] === undefined) {
//       count[current] = 1;
//       result.push(current);
//     } else if (count[current] < n) {
//       count[current]++;
//       result.push(current);
//     }
//   }
//   return result;
// }
function deleteNth(arr, n) {
  return arr.filter((element, index) => {
    return arr.slice(0, index).filter((e) => e === element).length < n;
  });
}

//explain
// create an empty array to store the result
// create an empty object to store the count of each element
// iterate through the input array
// if the current element is not in the count object, add it and set its count to 1
// if the current element is in the count object and its count is less than n, increment its count and add it to the result array
// return the result array
// time complexity is O(n) because we iterate through the input array once
