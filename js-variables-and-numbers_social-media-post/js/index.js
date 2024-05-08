console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const postTitle = "Roadtrip trough Spain";
const postText = "We went on a road trip through Spain. It was impressive.";
let numberOfLikes = "42";
const postCreator = "VanDude_89";
const isReported = "false";

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("Title:", postTitle);
console.log("Text:", postText);
console.log("Number of Likes:", numberOfLikes);
console.log("Post Creator:", postCreator);
console.log("Reported:", isReported);

numberOfLikes++;
console.log("Number of Likes:", numberOfLikes);
// --^-- write your code here --^--
