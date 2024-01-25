const express = require('express');
const {NoteModel} = require('../models/noteModel') 
const  {auth} = require("../Middleware/auth.middleware")
const noteRouter = express.Router()


noteRouter.post("/create" ,auth, async(req, res) => {
    try{
     const note = new NoteModel(req.body);
     await note.save();
     res.send({"msg" :"A new note has been created"})
    }catch(error){
        res.send({"error" : error})
    }
})

noteRouter.get("/" , auth,async(req, res) => {
        try{
         const notes = await NoteModel.find();
         req.send(notes)
        }catch(error){
           res.send({"error" : true, "msg" : error})
        }
});

noteRouter.patch("/update/:noteID" ,auth, async(req, res) => {
     const {noteID} = req.params;
     try{
       await NoteModel.findByIdAndUpdate({_id : noteID},req.body)
       req.send(`note has been updated with the id: ${noteID}`)
     }catch(error){
         res.send({"error" : error})
     }
})

noteRouter.delete("/delete/:noteID" ,auth, async(req, res) => {
    const{noteID} = req.params;
    try{
       await NoteModel.findByIdAndDelete({_id:noteID},req.body)
       res.send(`note has been deleted with the id: ${noteID}`)
    }catch(error){
        res.send({"error": error})
    }
})

module.exports ={
    noteRouter
}