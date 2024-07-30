// Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

const removeDuplicates = (arr) => [...new Set(arr)];

// const removeDuplicates = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

console.log(removeDuplicates([1, 2, 3, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeDuplicates([1, 2, 5, true, 1, "hello", 2, 3, "hello", true])); // [1, 2, 3, 4, 5, true, 'hello']
