const express = require("express");
const router = express.Router();

//controller
const {
  userSignupController,
  adminSignUpController,
  editorSignUpController,
  officerSignUpController,
} = require("../controllers/signUpController");

router.post("/user", userSignupController);
router.post("/admin", adminSignUpController);
router.post("/editor", editorSignUpController);
router.post("/officer", officerSignUpController);

module.exports = router;
