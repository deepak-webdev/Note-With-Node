// const fs = require("fs");
// const chalk = require("chalk");
const notes = require("./utils.js");
// const validator = require("validator");
const yargs = require("yargs");
// fs.writeFileSync("notes.txt", "This is node notes");
// fs.appendFileSync("notes.txt", " this is appende text");

// console.log(getNotes("This is a notes..."));
// console.log(validator.isEmail("deepak@example.com"));
// console.log(chalk.green.inverse.bold("Success!"));
// console.log(process.argv);
yargs.command({
    command: "add",
    description: "Add New Note",
    builder: {
        title: {
            description: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            description: "Note Body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    },
});
yargs.command({
    command: "remove",
    description: "Remove Note",
    builder: {
        title: {
            description: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    },
});
yargs.command({
    command: "list",
    description: "list Note",
    handler() {
        notes.listNotes()
    },
});
yargs.command({
    command: "read",
    description: "list Note",
    handler(argv) {
        notes.readNotes(argv.title)
    },
});

// for the above things working use
yargs.parse();