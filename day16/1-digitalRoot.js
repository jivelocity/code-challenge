// day 16/366
// https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript

function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  return digitalRoot(
    n
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0)
  );
}

//explain
// if n is less than 10, return n
// else, convert n to a string, split it, and reduce it to the sum of the digits
// then call digitalRoot recursively on the sum
// time complexity is O(log n)
