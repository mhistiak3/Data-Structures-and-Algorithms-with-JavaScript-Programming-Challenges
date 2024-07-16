// Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

// const isPalindrome = (str) =>{
//     let formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g,"")
//     return formatedStr === formatedStr.split("").reverse().join("");
// }

const isPalindrome = (str) => {
  let formatedStr = removeNonAlphaNumeric(str.toLowerCase());
  return formatedStr === reverseStr(formatedStr);
};
const removeNonAlphaNumeric = (str) => {
  let formatedStr = "";
  for (let i = 0; i < str.length; i++) {
 
    if (isAlphaNumeric(str[i])) {
        
      formatedStr += str[i];
    }
  }
  
  return formatedStr;
};
const isAlphaNumeric = (str) => {
  let code = str.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
};

const reverseStr = (str)=>{
   if (!str) {
     return "";
   }
   let reverseStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
     reverseStr += str[i];
   }
   return reverseStr.toLowerCase();
}

console.log(isPalindrome("Madam %&$")); // true
console.log(isPalindrome("hello")); // false
