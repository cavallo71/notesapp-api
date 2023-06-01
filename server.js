const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log("Server running at PORT: " +PORT)});
const mongoose = require('mongoose');
  mongoose.connect('mongodb+srv://robertodanni71:tolomeo@cluster0.snxvnje.mongodb.net/notesdb').then
  (  function(){ 
     app.get('/',function(req,res){  res.json({message:" API is Working !"});  });  app.get('/notes/list',function(req,res){  res.send("This is the Notes Page");  });  });  // outside the mongoose function 
    const noteRouter = require('./routes/Note') ;
     app.use("/notes", noteRouter); 

 