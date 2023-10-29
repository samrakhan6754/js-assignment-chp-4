// Practice exercise 4.1

// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action
// }
// Logic Statements
// [ 74 ]
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.


// Step 1: Create a variable with a Boolean value
var myVariable = true; // You can also change this to false to see different results.

// Step 2: Output the value of the variable to the console
console.log("myVariable:", myVariable);

// Step 3: Check whether the variable is true and output a message if it is
if (myVariable) {
  console.log("myVariable is true.");
}

// Step 4: Add another if statement with a ! (not) in front of the variable to check if it's not true
if (!myVariable) {
  console.log("myVariable is not true.");
}

// Alternatively, you can use an if-else statement to achieve the same result
if (myVariable) {
  console.log("myVariable is true.");
} else {
  console.log("myVariable is not true.");
}

// Step 5: Change the variable to the opposite value to see how the results change
myVariable = !myVariable; // Toggle the value (true to false or false to true)

// Output the changed value and retest the conditions
console.log("myVariable (changed):", myVariable);

if (myVariable) {
  console.log("myVariable is true.");
} else {
  console.log("myVariable is not true.");
}


// Practice exercise 4.2


// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
// 7. Output the response message variable to the console

// Step 1: Create a prompt to ask the user's age
var userAge = prompt("Please enter your age:");

// Step 2: Convert the response from the prompt to a number
userAge = parseInt(userAge);

// Step 3: Declare a message variable
var message;

// Step 4: If the input age is equal to or greater than 21, set the message variable
if (userAge >= 21) {
  message = "You are confirmed for entry to the venue and can purchase alcohol.";
}
// Step 5: If the input age is equal to or greater than 19, set the message variable
else if (userAge >= 19) {
  message = "You are confirmed for entry to the venue, but you cannot purchase alcohol.";
}
// Step 6: Provide a default else statement to set the message variable
else {
  message = "Sorry, you are denied entry to the venue.";
}

// Step 7: Output the response message variable to the console
console.log(message);



// Practice exercise 4.3

// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check whether
// their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console


// Step 1: Create a Boolean value for an ID variable
var isIDValid = true; // Change this to false to see the opposite result.

// Step 2: Using a ternary operator, create a message variable to check the ID's validity
var message = isIDValid ? "You are allowed into the venue." : "You are not allowed into the venue.";

// Step 3: Output the response to the console
console.log(message);



// Practice exercise 4.4
// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
// random() will return a random number in the range of 0 to less than 1, including 0
// but not 1. You can then scale it to the desired range by multiplying the result and
// using Math.floor() to round it down to the nearest whole number; for example, to
// generate a random number between 0 and 9:
// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);
// Chapter 4
// [ 81 ]
// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.



// Step 1: Generate a random number between 0 and 5 for 6 possible results
var randomNumber = Math.floor(Math.random() * 6);

// Step 2: Create a prompt to get a question from the user
var userQuestion = prompt("Ask the Magic 8-Ball a question:");

// Step 3: Create 6 responses using a switch statement
var response;
switch (randomNumber) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "It is decidedly so.";
    break;
  case 2:
    response = "Reply hazy, try again.";
    break;
  case 3:
    response = "Cannot predict now.";
    break;
  case 4:
    response = "Don't count on it.";
    break;
  case 5:
    response = "My sources say no.";
    break;
  default:
    response = "Sorry, I cannot answer that question.";
    break;
}

// Step 4: Create a variable to hold the end response
var finalResponse = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;

// Step 5: Output the user's question and the randomly selected response to the console
console.log(finalResponse);


// Practice exercise 4.5


// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string






// Step 1: Create a variable called "prize" and ask the user to set the value between 0 and 10
var prize = prompt("Please select a number between 0 and 10 to determine your prize:");

// Step 2: Convert the prompt response to a number data type
prize = parseInt(prize);

// Step 3: Create a variable for the output message
var message = "My Selection: ";

// Step 4: Use a switch statement to provide responses based on the selected number
var prizeMessage;
switch (prize) {
  case 0:
    prizeMessage = "You won a free coupon!";
    break;
  case 1:
  case 2:
  case 3:
    prizeMessage = "Congratulations! You've won a small prize!";
    break;
  case 4:
  case 5:
    prizeMessage = "You are the lucky winner of a medium prize!";
    break;
  case 6:
  case 7:
  case 8:
    prizeMessage = "Wow! You've won a large prize!";
    break;
  case 9:
    prizeMessage = "You've hit the jackpot! You won a grand prize!";
    break;
  case 10:
    prizeMessage = "Sorry, no prize for you.";
    break;
  default:
    prizeMessage = "Please enter a number between 0 and 10.";
    break;
}

// Step 5: Output the message back to the user by concatenating the strings
console.log(message + prizeMessage);




// Chapter projects


// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.


// Step 1: Define a dynamic number value for comparison (you can change this number)
var dynamicNumber = 42;

// Step 2: Ask the user to enter a number
var userNumber = parseInt(prompt("35:"));

// Step 3: Compare the user's number to the dynamic number value and provide feedback
if (userNumber > dynamicNumber) {
  console.log("Your number is greater than the dynamic number.");
} else if (userNumber < dynamicNumber) {
  console.log("Your number is less than the dynamic number.");
} else {
  console.log("Your number is equal to the dynamic number.");
}




// Friend checker game


// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.
// Step 1: Define an array of known friend names


var knownNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Step 2: Ask the user to enter a name
var userName = prompt("sam khan:");

// Step 3: Use a switch statement to check if the entered name is a known friend
switch (userName) {
  case "Alice":
  case "Bob":
  case "Charlie":
  case "David":
  case "Eve":
    console.log(samkhan + " bod.");
    break;
  default:
    console.log("Sorry, I don't know " + userName + ".");
}



// Rock Paper Scissors game

// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game



// Step 1: Create an array containing Rock, Paper, and Scissors
var choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random numbers for the player and computer selections
var playerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
var computerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2

// Step 3: Create a variable to hold a response message to the user
var responseMessage = "Player: " + choices[playerIndex] + " vs. Computer: " + choices[computerIndex] + "\nResult: ";

// Step 4: Handle player and computer selections, checking for ties
if (playerIndex === computerIndex) {
  responseMessage += "It's a tie!";
} else {
  // Step 5: Apply the game logic and determine the winner
  if (
    (playerIndex === 0 && computerIndex === 2) ||
    (playerIndex === 1 && computerIndex === 0) ||
    (playerIndex === 2 && computerIndex === 1)
  ) {
    responseMessage += "Player wins!";
  } else {
    responseMessage += "Computer wins!";
  }
}

// Step 6: Output the message showing player selection vs. computer selection and the game result
console.log(responseMessage);
