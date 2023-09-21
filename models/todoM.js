const mongoose = require('mongoose')

var todoSchema=mongoose.Schema({

name:{
    type: String,
    required: true
    // minlength:[3,"low  charcters entered"], 
    // maxlength:20,
    // trim:true,
    // unique:true,
},
status:{
    type: String,
    enum: ['todo','in progress','complete'],
    default:"todo"

}

},
{
    collection: 'todo',
    bufferCommands: false,
    autoCreate: false,
})


var todomodel=mongoose.model('', todoSchema)
module.exports=todomodel
