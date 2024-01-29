// day 4/366
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript

function dnaStrand(dna) {
  let dnaMap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map((v) => dnaMap[v])
    .join("");
}

console.log(dnaStrand("AAAA")); //"TTTT","String AAAA is"
