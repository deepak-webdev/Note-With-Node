const fs = require("fs");
const chalk = require("chalk");
const getNotes = (str) => {
    return str;
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title);
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!!"));
    } else {
        console.log(chalk.red.inverse("Note title taken!!"));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};
// Function for reading notes
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note Not found"))
    }
}
const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note Removed!"))
        saveNotes(notesToKeep);

    } else {
        console.log(chalk.red.inverse("No Note Found!"))
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes...'))
    notes.forEach((note) => {
        console.log(note.title)
    });

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};