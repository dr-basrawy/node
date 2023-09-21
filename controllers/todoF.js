


var fs = require('fs');
var todomodel = require('../models/todoM');




//functions




function getalltodos(){
    return JSON.parse(fs.readFileSync('data.json','utf-8'))
}
function savetodos(todo){

    return todomodel.create(todo)

}
function getTodoById(id){
   var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))
   var todo=todos.find(todo => todo.id==id)
   return todo
}
function todoUpdeteById(id,name){
   var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))
   var todo= todos.find((todo) => todo.id==id)
   todo.name=name
fs.writeFileSync('data.json', JSON.stringify(todos))
return todo
}
function todoDelete(id){
   var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))
   // var todo= todos.find((todo) => todo.id==id)
   let tod = todos.findIndex(item => item.id == id);

   todos.splice(tod,1)
   fs.writeFileSync('data.json', JSON.stringify(todos))
   return tod
}

module.exports ={getalltodos,savetodos,getTodoById,todoUpdeteById,todoDelete}
