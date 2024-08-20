// Challenge: FizzBuzz Array
// you loop from 1 to 100 and print out each number. However, if the number is divisible by 3, you print out "Fizz" instead. If the number is divisible by 5, you print out "Buzz" instead. If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.

const fizzBuzzArray = (num) => {
  let arr = [];
  for (let number = 1; number <= num; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (number % 3 === 0) {
      arr.push("Fizz");
    } else if (number % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(number);
    }
  }
  return arr;
};
console.log(fizzBuzzArray(15));
