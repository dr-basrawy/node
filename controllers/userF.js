


var fs = require('fs');
const usermodel =require('../models/usersm')



function getallusers(){
   return JSON.parse(fs.readFileSync('data.json','utf-8'))
}
function saveUser(user){

   return usermodel.create(user)

}
function getuserById(id){
  var users=JSON.parse(fs.readFileSync('data.json','utf-8'))
  var user=users.find(user => user.id==id)
  return user
}
function userUpdeteById(id,username){
  var users=JSON.parse(fs.readFileSync('data.json','utf-8'))
  var user= users.find((user) => user.id==id)
  user.username=username
fs.writeFileSync('data.json', JSON.stringify(users))
return user
}
function userDelete(id){
  var users=JSON.parse(fs.readFileSync('data.json','utf-8'))
  // var todo= todos.find((todo) => todo.id==id)
  let user = users.findIndex(item => item.id == id);

  todos.splice(user,1)
  fs.writeFileSync('data.json', JSON.stringify(users))
  return user
}
module.exports ={getallusers,getuserById,userUpdeteById,userDelete,saveUser}