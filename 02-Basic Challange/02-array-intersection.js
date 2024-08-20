// Challenge: Array Intersection
// Instructions
// Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

/*
const arrayIntersection = (arr1, arr2) => {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
};
*/
const arrayIntersection = (arr1, arr2) => {
  const set = new Set(arr1);
  const intersection = [];
  for (let num of arr2) {
    if (set.has(num) && !intersection.includes(num)) {
      intersection.push(num);
    }
  }
  return intersection;
};
console.log(arrayIntersection([1, 2, 3, 5, 3], [3, 4, 5, 3, 1]));
