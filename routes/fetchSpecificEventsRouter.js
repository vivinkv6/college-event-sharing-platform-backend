const express = require("express");
const {getAllEvents,getPlaceAndTypeSpecificEvents,getPlaceSpecificEvents,getTypeSpecificEvents,searchEventName}=require('../controllers/fetchSpecificEvents');
const router = express.Router();

router.get("/all", getAllEvents);
router.get("/place", getPlaceSpecificEvents);
router.get("/type", getTypeSpecificEvents);
router.get('/search',searchEventName);
router.get('/placetype',getPlaceAndTypeSpecificEvents);

module.exports = router;
