/*
ChallengeFour : Add and options to yargs

1. Setup a body option for add command
2. Configure a description, make it required, and for it to be a string,
3. Log the body value in the handler function
4. Test you work!

*/

const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');
const { argv } = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note a title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        console.log(`Title ${argv.title}`);
        console.log(`Body ${argv.body}`);

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

yargs.parse();