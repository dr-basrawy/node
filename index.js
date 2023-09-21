// const valid=require('validator')


// console.log(valid.isEmail("beso@gmail.com"))

const express = require('express');
const mongoose = require('mongoose');
var app = express();
var fs = require('fs');
var todorouter = require('./routes/todo.js');
var userrouter = require('./routes/user.js');
//middelware
app.use(express.json());
app.use('/todo',todorouter)
app.use('/user',userrouter)

app.use(function(req, res, next) {
    next();
}); 
app.use(express.static('./static'))



// mongoose.connect("mongodb://127.0.0.1:27017/TodosDB").then(()=>{
// console.log("Connected to Mongo");
// })
mongoose.connect("mongodb://127.0.0.1/users").then(()=>{
console.log("Connected to Mongo");
})
var port=3335;
app.listen(port,()=>{
    console.log('listening on port is susses')  
})