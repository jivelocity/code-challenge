// day 15/366
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript

function likes(names) {
  let length = names.length;
  if (length === 0) return "no one likes this";
  if (length === 1) return `${names[0]} likes this`;
  if (length === 2) return `${names[0]} and ${names[1]} like this`;
  if (length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (length > 3)
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
}

//explain
// if the length of the array is 0, return 'no one likes this'
// if the length of the array is 1, return the first element and 'likes this'
// if the length of the array is 2, return the first and second element and 'like this'
// if the length of the array is 3, return the first, second and third element and 'like this'
// if the length of the array is greater than 3, return the first, second and length - 2 and 'others like this'
// time complexity is O(1)
