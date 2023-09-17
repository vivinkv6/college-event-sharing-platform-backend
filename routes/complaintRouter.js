const express=require('express');
const complaintRouter=require('../controllers/complaintController');
const router=express.Router();

router.post('/',complaintRouter);


module.exports=router