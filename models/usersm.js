const mongoose = require('mongoose')

var userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
        // unique:true,
        // minlength:true

    },
    pass:{
        type:String,
        require:true
    // },
    // firstName:{
    //     type:String
    //     // require:true,
    //     // minlength:3,
    //     // maxlength:15

    // },
    // lastName:{
    //     type:String,
    //     require:true
    //     // minlength:3,
    //     // maxlength:15

    }


},
// { timestamps: true },
{
    collection: 'user',
    bufferCommands: false,
    autoCreate: false,
}
)
var  usermodel=mongoose.model('',userSchema)
module.exports = usermodel