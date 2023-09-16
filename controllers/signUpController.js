const eventUser = require("../models/userModel");
const eventAdmin = require("../models/adminModel");
const eventEditor = require("../models/EditorModel");
const eventOfficer = require("../models/officerModel");
const bcrypt = require("bcrypt");

const salt = 10;

//user signup controller
const userSignupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await eventUser.findOne({ email });

    if (checkEmail) {
      return res.json({ msg: "Email already Exist" });
    }

    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return err;
      }
      const result = await eventUser.create({ email, password: hash });

      if (!result) {
        return res.json({ err: "Account Creation failed" });
      }
      res.json({ result });
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//admin signup controller

const adminSignUpController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkData = await eventAdmin.find({});

    if (checkData.length == 1) {
      return res.json({ msg: "Admin Already Exist" });
    }

    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return res.json({ err: err.message });
      }
      const result = await eventAdmin.create({ email, password: hash });

      if (!result) {
        return res.json({ err: "Account Creation failed" });
      }
      res.json({ msg: "Admin Account Created Successfully" });
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//editor signup controller

const editorSignUpController = async (req, res) => {
  const { email, password, college, avatar, contact } = req.body;

  try {
    const checkEmail = await eventEditor.findOne({ email });

    if (checkEmail) {
      return res.json({ msg: "Email Already Exist" });
    }

    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return res.json({ err: err.message });
      }
      const result = await eventEditor.create({
        email,
        password: hash,
        avatar,
        college,
        contact,
      });

      if (!result) {
        return res.json({ err: "Account Creation Failed" });
      }

      res.json({ msg: "Account Created Successfully" });
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//officer signup controller

const officerSignUpController = async (req, res) => {
  const { email, password, designation } = req.body;

  try {
    const checkEmail = await eventOfficer.findOne({ email });

    if (checkEmail) {
      return res.json({ msg: "Email Already Exist" });
    }

    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return res.json({ err: err.message });
      }
      const result = await eventOfficer.create({
        email,
        password: hash,
        designation,
      });

      if (!result) {
        return res.json({ err: "Account Creation failed" });
      }
      res.json({ msg: "Officer Account Created Successfully" });
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};

module.exports = {
  userSignupController,
  adminSignUpController,
  editorSignUpController,
  officerSignUpController,
};
