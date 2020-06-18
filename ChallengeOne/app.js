/*
Challenge: Define and use a function in a new file

1. Create a new file called note.js
2. Create getNotes function that return "Your notes..."
3. Export get notes function 
4. From app.js load in and call the function printing message to console.
*/
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(notes);