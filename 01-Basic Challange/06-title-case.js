// Challange:6 Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((title) => title[0].toUpperCase() + title.slice(1))
    .join(" ");

let title =
  "Master data structures like stacks, queues, linked lists, trees, maps and hash maps";
console.log(titleCase(title));
