// 05) Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

// const findMissingLetter = (latterArr = []) => {
//   if (latterArr.length === 0) {
//     return null;
//   }
//   const latters = "abcdefghijklmnopqrstuvwxyz";
//   const myLatterArr = latters.split("");
//   const cutArr = myLatterArr.slice(
//     myLatterArr.indexOf(latterArr[0]),
//     myLatterArr.indexOf(latterArr[latterArr.length - 1]) + 1
//   );

//   for (let i = 0; i < cutArr.length; i++) {
//     if (!latterArr.includes(cutArr[i])) {
//       return cutArr[i];
//     }
//   }
//   return "No Number is missing";
// };

const findMissingLetter = (latterArr) => {
  const latters = "abcdefghijklmnopqrstuvwxyz";

  const startIndex = latters.indexOf(latterArr[0]);
  for (let i = 0; i < latterArr.length; i++) {
    if (latterArr[i] !== latters[startIndex + i]) {
      return latters[startIndex + i];
    }
  }

  return "No Missing latter found"
};
console.log(findMissingLetter(["m", "o", "o", "p", "q"]));
