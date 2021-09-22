const express = require('express')
const router = express.Router();


const NoteActions = require('./notes')

router.get('/notes', NoteActions.getAllNotes)
router.get('/notes/:id', NoteActions.getNote)
router.post('/notes', NoteActions.saveNote)
router.put('/notes/:id', NoteActions.updateNote)
router.delete('/notes/:id',NoteActions.deleteNote)
router.delete('/notes',NoteActions.deleteAll)


module.exports = router;