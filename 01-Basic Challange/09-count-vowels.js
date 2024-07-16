// Write a function called countVowels that takes in a string and returns the number of vowels in the string.

const countVowels = (str) => {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let string = str[i].toLowerCase();

    if (vowels.includes(string)) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("hello"));
