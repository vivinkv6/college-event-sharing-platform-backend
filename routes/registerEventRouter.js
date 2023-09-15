const express = require("express");
const registerEventController = require("../controllers/registerEvent");
const router = express.Router();

router.post("/", registerEventController);

module.exports = router;
