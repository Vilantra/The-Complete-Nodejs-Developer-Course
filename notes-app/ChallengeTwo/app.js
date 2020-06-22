/*
ChallengeThree : Use the chalk library in your project

1. Install version 2.4.1. of chalk
2. Load chalk into app.js
3. Use it to print teh string "Success!" to the console in green
4. Test your work

//Bonus: Use docs to mess around with other styles. Makes text bold and inversed.

*/

const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(chalk.magenta(notes));

console.log(chalk.green.inverse.bold('Success!'));


// const validator = require('validator')
// console.log(validator.isEmail('karen.reyes.c@gmail.cl'));