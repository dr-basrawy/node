var express = require('express')
var router = express.Router();
var fs = require('fs');
var {getallusers,getuserById,userUpdeteById,userDelete,saveUser}= require('../controllers/userF');
// const { Module } = require('module');


//all todo
router.get("/",(req, res) => {
   var users= getallusers()
    res.json({data:users});
});
//save 
router.post("/",async(req, res) => {
    var user= req.body
  var newuser= await saveUser(user)

    res.status(201).json({data:newuser});
});
router.get('/:id',(req, res) => {
 var id = req.params.id
 var  user=  getuserById(id)
 if(user)
 {
    res.status(200).json({data:user})
 }else{
    res.status(404).json({data:"not found"})}

})
router.patch('/:id',(req, res) => {
    var {username}=req.params;
    var {pss}=req.body;
    var  user =userUpdeteById(id,username,pss);

      res.status(200).json({data:user})
    
})
router.delete('/:id',(req, res) => {
    var {username}=req.params;
    var {pass}=req.body;
   var user =userDelete(id,username)
    res.status(200).json({data:user})


});
module.exports =router;