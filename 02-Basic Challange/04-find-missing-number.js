// Challenge: Find The Missing Number
// Instructions
// Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

// const findMissingNumber = (numArr = []) => {
//   const numLen = numArr.length;
//   if (numLen === 0) return 1;
//   const newArr = Array(numLen)
//     .fill()
//     .map((_, index) => index + 1);

//   for (let i = 0; i < newArr.length; i++) {
//     if (!numArr.includes(newArr[i])) {
//       return newArr[i];
//     }
//   }
// };

// const findMissingNumber = (numArr = []) => {
//   const numLen = numArr.length;
//   if (numLen === 0) return 1;
//   let n = numLen + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = numArr.reduce((acc, value) => acc + value, 0);

//   return expectedSum - actualSum
// };

const findMissingNumber = (numArr = []) => {
  const n = numArr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numArr.reduce((acc, num) => acc + num, 0);

  const missingNumber = expectedSum - actualSum;

  // If the missing number is not in the valid range (1 to n), return a message.
  return missingNumber > 0 && missingNumber < n
    ? missingNumber
    : "No number is missing";
};

console.log(findMissingNumber([1, 2, 3, 4, 6, 8, 9, 5]));
// console.log(findMissingNumber([1, 2, 3, 4, 5]));
