#! /usr/bin/env node


import inquirer from "inquirer";


// 1. comp will generate a random number - done.
// 2. user input for guessing number - done
//3.  compare user input with comp generated number and show result



const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {

name: "userGuessedNumber",
    type: "number",
   message: "Please guess a number between 1-10.",
}]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
} else {
    console.log("You guessed wrong number.");
}