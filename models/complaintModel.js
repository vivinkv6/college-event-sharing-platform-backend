const mongoose = require('mongoose');

const schema = mongoose.Schema;

const complaintSchema = new schema({
    sender:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('eventComplaint',complaintSchema);