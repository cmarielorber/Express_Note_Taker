//dependencies
const express = require('express');
const router = express.Router();
//create a random id
const uuid = require('uuid');
//db class object
const DB = require('../db/DB')

//to get notes
router.get('api/notes', async function (req, res) {
    const notes = await DB.readNotes();
    return res.json(notes);
});

//new route to add a new note then add to json file
router.post('/api/notes', async function (req, res) {
    const currentNotes = await DB.readNotes();
    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text,
    };
    await DB.addNote([...currentNotes, newNote]);
    return res.send(newNote);
});

//route to delete notes
router.delete('/api/notes/:id', async function (req, res) {
    //separates by id
    const noteDelete = req.params.id;
    //notes stored in json file
    const currentNotes = await DB.readNotes();
    //sort and create new array and doesn't include deleted note
    const newNoteArray = currentNotes.filter((note) => note.id !== noteDelete);
    //sends new note array to db class
    await DB.noteDelete(newNoteArray);
    return res.send(newNoteArray)
});

module.exports = router;