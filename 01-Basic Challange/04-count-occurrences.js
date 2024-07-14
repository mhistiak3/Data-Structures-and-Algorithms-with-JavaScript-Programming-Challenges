// Challange:04 Write a function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

/*
const countOccurrences = (str,char)=>{
    let charCount = 0

    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        charCount++
      }
    }
    return charCount
}
*/
const countOccurrences = (str,char)=> str.split(char).length - 1

console.log(countOccurrences("hello world","p"));
