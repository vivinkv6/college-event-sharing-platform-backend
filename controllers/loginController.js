const eventUser = require("../models/userModel");
const eventOfficer = require("../models/officerModel");
const eventAdmin = require("../models/adminModel");
const eventEditor = require("../models/EditorModel");
const bcrypt = require("bcrypt");

//user login controller

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await eventUser.findOne({ email });

    if (!checkEmail) {
      return res.json({ msg: "Invalid Email" });
    }

    bcrypt.compare(password, checkEmail.password, (err, validity) => {
      if (err) {
        return res.json({ err: err.message });
      }
      if (!validity) {
        return res.json({ msg: "Incorrect Password" });
      }

      res.json({ msg: "Login Successfully" });
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//admin login controller

const adminLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await eventAdmin.findOne({ email });

    if (!checkEmail) {
      return res.json({ msg: "Invalid Email" });
    }

    bcrypt.compare(password, checkEmail.password, (err, validity) => {
      if (err) {
        return res.json({ err: err.message });
      }
      if (!validity) {
        return res.json({ msg: "Incorrect Password" });
      }
      res.json({ msg: "Login Sccessfully" });
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//officer login controller

const officerLoginController=async(req,res)=>{

    const {email,password}=req.body;

    try {

        const checkEmail=await eventOfficer.findOne({email});

        if(!checkEmail){
            return res.json({msg:"Invalid Email"});
        }

        bcrypt.compare(password,checkEmail.password,(err,validity)=>{
            if(err){
                return res.json({err:err.message});
            }
            if(!validity){
                return res.json({msg: "Incorrect Password"});
            }

            res.json({msg: "Login Successfully"})
        })
        
    } catch (error) {
        res.json({err:error.message});
    }

}


//editor login controller

const editorLoginController=async(req,res)=>{

    const {email,password}=req.body;

    try {

        const checkEmail=await eventEditor.findOne({email});

        if(!checkEmail){
            return res.json({msg:"Invalid Email"});
        }

        bcrypt.compare(password,checkEmail.password,(err,validity)=>{
            if(err){
                return res.json({err:err.message});
            }
            if(!validity){
                return res.json({msg: "Incorrect Password"});
            }

            res.json({msg: "Login Successfully"})
        })
        
    } catch (error) {
        res.json({err:error.message});
    }
}

module.exports = {userLoginController,adminLoginController,officerLoginController,editorLoginController};
