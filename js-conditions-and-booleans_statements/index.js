console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 12;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

let price = 0;

if (numberOfHotdogs < 5) {
  price = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  price = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  price = numberOfHotdogs * 1;
} else {
  price = numberOfHotdogs * 0.1;
}
console.log(
  "You need to pay " +
    price.toFixed(2) +
    " euros for " +
    numberOfHotdogs +
    " hotdog(s)."
);
// Part 4: Daytime
const currentHour = 21;

let statement = "";

if (currentHour < 17) {
  statement = "Still need to learn...";
} else if (currentHour < 22) {
  statement = "Partytime!!!";
} else {
  statement = "Go to Bed!!!";
}

console.log(statement);

// Part 5: Greeting
const userName = "Chris";
const coachName = "Esraa";
const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";
console.log(greeting);
