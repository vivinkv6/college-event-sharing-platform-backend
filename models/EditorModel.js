const mongoose=require('mongoose');

const schema = mongoose.Schema;

const editorSchema=new schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("eventEditor",editorSchema);