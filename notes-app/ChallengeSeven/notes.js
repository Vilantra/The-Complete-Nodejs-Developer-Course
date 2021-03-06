const fs = require('fs');

const getNotes = () => {
    return 'Your notes..';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('add new note');
    } else {
        console.log('Note title taken');
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title)
    saveNotes(notesToKeep);
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
};