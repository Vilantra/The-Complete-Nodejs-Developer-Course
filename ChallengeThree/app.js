/*
ChallengeThre : Add two new commands

1. Setup command to support 'list' command (print placeholder message for now)
2. Setup command to support 'read' command (print placeholder message for now)
3. Test you work by running both commands and ensure correct output

*/

const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'add new note',
    handler: () => {
        console.log('Adding a new note!');
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: () => {
        console.log('Removing the note!');
    }
});

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: () => {
        console.log('Listing the notes!');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading the note!');
    }
});

console.log(yargs.argv);