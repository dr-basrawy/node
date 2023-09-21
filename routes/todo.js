var express = require('express')
var router = express.Router();
var fs = require('fs');
var {getalltodos,savetodos,getTodoById,todoUpdeteById,todoDelete}= require('../controllers/todoF');
// const { Module } = require('module');


//all todo
router.get("/",(req, res) => {
   var todos= getalltodos()
    res.json({data:todos});
});
//save 
router.post("/",async(req, res) => {
    var todo= req.body
  var newtodo= await savetodos(todo)

    res.status(201).json({data:newtodo});
});
router.get('/:id',(req, res) => {
 var id = req.params.id
 var  todo=  getTodoById(id)
 if(todo)
 {
    res.status(200).json({data:todo})
 }else{
    res.status(404).json({data:"not found"})}

})
router.patch('/:id',(req, res) => {
    var {id}=req.params;
    var {name}=req.body;
    var  todo =todoUpdeteById(id,name);

      res.status(200).json({data:todo})
    
})
router.delete('/:id',(req, res) => {
    var {id}=req.params;
    var {name}=req.body;
   var tod =todoDelete(id,name)
    res.status(200).json({data:tod})


});
module.exports =router;