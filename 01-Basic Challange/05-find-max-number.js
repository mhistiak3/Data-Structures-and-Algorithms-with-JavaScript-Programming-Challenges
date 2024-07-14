// Challange:05 Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.

const findMaxNumber = (arr) => {
  let maxNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
};
console.log(findMaxNumber([44,3,2,55,23]));

