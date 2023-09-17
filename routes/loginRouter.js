const express=require('express');
const router=express.Router();
const {userLoginController,adminLoginController,officerLoginController,editorLoginController}=require('../controllers/loginController');

router.post('/user',userLoginController);
router.post('/admin',adminLoginController);
router.post('/officer',officerLoginController);
router.post('/editor',editorLoginController);


module.exports=router;