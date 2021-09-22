const Note = require('./db/models/note')



module.exports = {



   async saveNote(req, res) {
        const item = req.body.item;
        
        let note;
        try {
            const note = await new Note({
                item:item,
            })
           await note.save()
        } catch (err) {
            res.status(200).json({ message: err.message });
        }
        
         
res.status(201).json(note)
        
    },
    async getAllNotes(req, res) {
        let doc;
        try {  doc = await Note.find({})
        } catch (error) {
            return res.status(500).json({message:error.message})
    }
        
         res.status(200).json(doc)
         
         
    },
    async getNote(req, res) {
       const id = req.params.id;
        const note =  await Note.findOne({ _id: id });
       
        res.status(200).json(note);
        
    },
    async updateNote(req, res) {
        const id = req.params.id;
        const item = req.body.item;
        
        const note = await Note.findOne({ _id: id })
         
        note.item = item;
        
        await note.save()

        res.status(201).json('Notatka zaktualizowana');
    },
   async deleteNote(req, res) {
        const id = req.params.id;
       
       const dellNote = await Note.deleteOne({_id:id})  
        res.status(204).json(dellNote)
    },
    async deleteAll(req, res) {
        const deleteall = await Note.deleteMany({})
        res.status(204).json(deleteall)
   }
}