const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);

// console.log(bookJson);

// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-Json.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

/*
Challenge: Work with JSON and the file system

//1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work by viewing data in the JSON file
*/

const dataBuffer = fs.readFileSync('1-Json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);

data.name = "Karen";
data.age = 35
const dataNew = JSON.stringify(data);
console.log(dataNew);
fs.writeFileSync('1-json.json', dataNew);