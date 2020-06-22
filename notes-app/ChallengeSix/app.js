const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { argv } = require('yargs');

/*
Challenge: Setup command option and function

1. Setup the remove command to take a requiered "--title" option
2. Create and export a removeNote fuuction from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title od the note to be removed
5. Test you work using: node app.js remove --title="some title"

*/

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
        notes.addNotes(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
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
        notes.removeNotes(argv.title)
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