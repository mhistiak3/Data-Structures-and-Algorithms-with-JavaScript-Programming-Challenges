// Challenge: Display Likes
// Instructions
// Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

const displayLikes = (likesUser) => {
  let likesLength = likesUser.length;
  if (likesLength === 0) {
    return "no one likes this";
  }
  if (likesLength === 1) {
    return `${likesUser[0]} like this`;
  }
  if (likesLength === 2) {
    return `${likesUser[0]} and ${likesUser[1]} like this`;
  }
  if (likesLength === 3) {
    return `${likesUser[0]}, ${likesUser[1]} and ${likesUser[2]} like this`;
  }
  if (likesLength > 3) {
    return `${likesUser[0]}, ${likesUser[1]} and ${
      likesLength - 2
    } others like this`;
  }
  return str;
};

console.log(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"])); // 'Alex, Jacob and 3 others like this'
