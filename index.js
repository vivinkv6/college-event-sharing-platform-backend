require('dotenv').config();
const bodyParser = require("body-parser");
const express=require("express");
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const registerEventRouter=require('./routes/registerEventRouter');

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//routes

app.use('/create',registerEventRouter);

//server start

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server and Database Run Successfully");
    })
})