// Write a function called areAllCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

// const areAllCharactersUnique = (str) =>
//   [...new Set([...str.split("")])].join("") === str

// const areAllCharactersUnique = (str) => {
//   let strArr = str.split("");
//   let newArr = [];
//   for (let i = 0; i < strArr.length; i++) {
//     if (newArr.includes(strArr[i])) {
//       return false;
//     }
//     newArr.push(strArr[i]);
//   }
//   return true;
// };

function areAllCharactersUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }

  return true;
}
console.log(areAllCharactersUnique("monir"));
