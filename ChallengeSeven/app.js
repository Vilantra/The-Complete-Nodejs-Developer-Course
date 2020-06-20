const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { argv } = require('yargs');

/*
Challenge: Wire up removeNotes

1. Load existing notes
2. Use array filter method to remove the matching note (if any)
3. Save the newly created array
4. Test you work with a title that exists and a title that doesn't exist
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