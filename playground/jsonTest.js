// var testObj = {
// name: 'vishal',
// contact: '9404701536',
// };
// console.log(typeof testObj);

// var testObjString = JSON.stringify(testObj);
// console.log(typeof testObjString);

// const fs = require('fs');

// fs.writeFileSync('data.json', testObjString);

const fs = require('fs');


var addNotes = (title, body) =>{

    var notes= readNotes();
    var note={
        title,
        body
    };
    //var duplicateNotes = 

return saveNote(notes , note);
}

var readNotes = () =>{
try{
    var notesString= fs.readFileSync('./playground/data.json');
    debugger;
    console.log("read notes successfully");
    return JSON.parse(notesString);
}
catch(e){
    console.log("read failed");
    return [];
}
}

var saveNote= (notes, note) =>{
    notes.push(note);
console.log("notes ", notes);
fs.writeFileSync('./playground/data.json',JSON.stringify(notes));
return "added successfully";
}

var readNote = (title)=>{
    var notes= readNotes();
    var filteredNote = notes.filter((note)=> note.title === title);
    return filteredNote[0];
}

module.exports = {
    addNotes,
    readNotes,
    readNote
};