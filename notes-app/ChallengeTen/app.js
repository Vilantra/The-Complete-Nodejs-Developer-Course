const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { argv } = require('yargs');

/*
Challenge: Wire up list command
1. Create and export listnotes from notes.js
    - "Your notes" using chalk
    - Print note title for each note
2. Call listNotes from command handler
3. Test your work!
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
        notes.listNotes();
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