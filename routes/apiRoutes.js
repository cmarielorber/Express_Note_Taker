//dependencies
const express = require('express');
const router = express.Router();
//create a random id
const { v4: uuidv4 } = require('uuid');
//db class object
const DB = require('../db/DB')

//to get notes
router.get('/notes', async function (req, res) {
    const notes = await DB.readNotes();
    return res.json(notes);
});

//new route to add a new note then add to json file
router.post('/notes', async function (req, res) {
    const currentNotes = await DB.readNotes();
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
    };
    await DB.addNote([...currentNotes, newNote]);
    return res.send(newNote);
});

//route to delete notes
router.delete('/notes/:id', async function (req, res) {
    //separates by id
    const noteToDelete = req.params.id;
    //notes stored in json file
    const currentNotes = await DB.readNotes();
    //sort and create new array and doesn't include deleted note
    const newNoteArray = currentNotes.filter((note) => note.id !== noteToDelete);
    //sends new note array to db class
    await DB.noteDelete(newNoteArray);
    return res.send(newNoteArray)
});

module.exports = router;