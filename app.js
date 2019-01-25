console.log('start of project');

const yargs = require('yargs');

const services = require('./services.js');
const notesService = require('./playground/jsonTest.js');

const argv = yargs.argv;


console.log(argv);

if(argv._[0] === "add"){
    console.log("inside if")
var add = notesService.addNotes(argv.title, argv.body);
console.log(add);
}
else if(argv._[0] === "readAll"){
    var allNotes = notesService.readNotes();
    console.log(allNotes);
}
else if(argv._[0] == "read"){
    var note = notesService.readNote(argv.title);
    console.log("------- Note-------");
    console.log(note);
}
