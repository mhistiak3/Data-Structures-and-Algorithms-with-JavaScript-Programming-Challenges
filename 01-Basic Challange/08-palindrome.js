// Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.

const isPalindrome = (str)=>{
    let reversStr = str.split("").reverse()
    console.log(reversStr);
    
}
isPalindrome("hello")