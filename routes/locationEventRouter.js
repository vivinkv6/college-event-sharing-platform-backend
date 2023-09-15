const express = require("express");
const {
  locationEventController,
} = require("../controllers/fetchEventsController");
const router = express.Router();

router.get("/", locationEventController);

module.exports = router;
