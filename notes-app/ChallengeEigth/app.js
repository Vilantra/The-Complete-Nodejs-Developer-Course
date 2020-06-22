const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { argv } = require('yargs');

/*
Challenge: Use chalk to provide useful logs for remove

1. If a note is removed, printed  "Note removed!" with green background
2. If no note is removed, printed "No note found!" with a red backgound
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