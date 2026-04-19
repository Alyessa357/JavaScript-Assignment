// Question 1: Control Flow & Conditional Logic //

// Create a variable called score to store a student's mark
let score = 77;

// Convert score into grade category using a switch statement
// Used a switch(true) statement to check which grade range the score falls into
// Used true because each case contains a condition instead of a fixed value
// JavaScript checks each condition and stops when one becomes true
switch (true) {
  case (score >= 90 && score <= 100):
    console.log("Grade: A");
    break;
  case (score >= 80 && score <= 89):
    console.log("Grade: B");
    break;
  case (score >= 70 && score <= 79):
    console.log("Grade: C");
    break;
  case (score >= 60 && score <= 69):
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}

// Check if the student passed or failed using a ternary operator
// The ternary operator is a shorter way of writing an if...else statement
// If score is 60 or above then student "Passed", otherwise student "Failed" and grade is displayed
let result = score >= 60 ? "Passed" : "Failed";
console.log("Result:", result);

// ---------------------------------------------------------END------------------------------------------------------------//

// Question 2: Type Conversion, Truthy & Falsy Values

// Input variable - Stores the text "25" as a string.
let input = "25";

// Convert string to number variable - Converts "25" which is text, into the number 25 using Number(input)
let convertedNumber = Number(input);

console.log("\n\nConverted number:", convertedNumber);

// Values to test - Stored in an array.
// This puts all test values into one list.
let values = [0, "", "hello", null, undefined, NaN];

// Loop through values using if statements and testing if they are truthy or falsy
// Checks each value and Loops through each item one at a time.
values.forEach(value => {
  if (value) {
    console.log(value, ": Truthy");
  } else {
    console.log(value,  ": Falsy");
  }
});

// ---------------------------------------------------------END------------------------------------------------------------//

// Question 3: Functions & Logical Operators

// Creat function called greetingBot that takes two parameters: name (stores the user's name), isMorning (stores either true or false)
// Check if isMorning is true or false and use logical operators and template literals for output
function greetingBot(name, isMorning) {
  // Logical operator - is isMorning true? AND does name exist? 
  return isMorning && name
    // Used a ternary operator (If true ? → first message : Else(false) → second message).This basically checks whether it is morning
    // Used template literals to insert the person's name directly into the message. This makes the greeting dynamic depending on the input
    ? `Good morning, ${name}!`
    : `Hello, ${name}!`;
}

// Testing the function - Output
console.log("\n\n");
console.log(greetingBot("Aly", true));
console.log(greetingBot("David", false));
console.log(greetingBot("Emma", true));

// ---------------------------------------------------------END------------------------------------------------------------//

// Question 4: Objects & Methods

// Creat Object called post which stores related information about a social media post
// The comments property is an array so that it can store multiple comments
let post = {
  username: "Alyessa",
  caption: "Enjoying the sunset",
  likes: 120,
  comments: ["Beautiful!", "Amazing view!", "Love this!"],

  // Added a Method that increases likes by 1 - (A method is a function inside an object) 
  addLike: function () {
    // "this" refers to the current object. So this increases the post’s likes by 1
    this.likes++;
  }
};

// Increase likes - applies method (inceases likes) to like property inside post object
post.addLike();

console.log("\n\n");
console.log("Updated likes:", post.likes);

// Object destructuring to get username and caption - This extracts the values from the object into separate variables
let { username, caption } = post;

console.log("Username:", username);
console.log("Caption:", caption);

// ---------------------------------------------------------END------------------------------------------------------------//

// Question 5: Loops, Spread Operator & Pattern Printing

// Create two arrays of numbers, merge them using the spread operator, and print the combined array
// Arrays 1 and 2
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Merge arrays using Spread operator ... ( merges array1 with array2 ) - The spread operator takes each item from the two arrays and places them into a new array
let mergedArray = [...array1, ...array2];

// Print merged array
console.log("\n\nMerged Array:", mergedArray);
console.log("\n");

// ---------------------------------------------------

// Print pattern using For loop

// Used nested for loops to print a triangle pattern

// Outer loop - controls rows - this creates the 5 rows
// (Start counting from 1; keep looping while i is less than or equal to 5; Increase i by 1 each loop)
for (let i = 1; i <= 5; i++) {
  let row = "";

  // First inner loop - adds spaces - as the rows increase, the spaces decrease
  // (Start counting from 1; keep looping while j is less than or equal to 5-i; Increase j by 1 each loop)
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }

  // Second inner loop - adds stars - as the rows increase, the stars increase
  // (Start counting stars at 1; keep looping until k reaches the current row number; Increase by 1 each time)
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }

  // Print pattern
  console.log(row); 

  // Pattern logic: Each row contains fewer spaces and more stars. This creates the triangle shape.
}

// ---------------------------------------------------

// While loop countdown -  print numbers from 10 down to 1

let num = 10;

console.log("\n"); 

// keep looping while the number is still greater than or equal to 1, then I decreased the number using num--;
while (num >= 1) {
  // Prints number 
  console.log(num);
  // This subtracts 1 each time until the loop ends
  num--;
}

// ---------------------------------------------------------END------------------------------------------------------------//