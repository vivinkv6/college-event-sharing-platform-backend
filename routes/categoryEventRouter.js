const express = require("express");
const {
  catergoryEventController,
} = require("../controllers/fetchEventsController");
const router = express.Router();

router.get("/", catergoryEventController);

module.exports = router;
