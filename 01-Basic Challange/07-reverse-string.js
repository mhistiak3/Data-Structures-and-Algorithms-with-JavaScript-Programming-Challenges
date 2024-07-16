//Challange:7 Write a function called reverseString that takes in a string and returns the reverse of that string.

const reverseString = (str) => {
    if (!str) {
        return ""
    }
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
   reverseStr += str[i];
   
  }
  return reverseStr.toLowerCase();
};

console.log(reverseString());
