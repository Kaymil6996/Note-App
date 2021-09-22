
const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    
    
    item: {
        type: String,
        required:true,
    },
    
})

const Note = mongoose.model('Note',NoteSchema)

module.exports = Note 