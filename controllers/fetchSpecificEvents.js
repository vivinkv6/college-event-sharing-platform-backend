const event = require("../models/eventModel");

//get all events
const getAllEvents = async (req, res) => {
  try {
    const result = await event.find({});

    if (result.length == 0) {
      return res.json({ msg: "No More Events" });
    }

    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//get type specific events

const getTypeSpecificEvents = async (req, res) => {
  const { type } = req.query;
  try {
    const result = await event.find({ type });

    if (result.length == 0) {
      return res.json({ msg: "No More Events" });
    }

    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//get place specific events

const getPlaceSpecificEvents = async (req, res) => {
  const { place } = req.query;
  try {
    const result = await event.find({ place });

    if (result.length == 0) {
      return res.json({ msg: "No More Events" });
    }

    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//get place and type based events

const getPlaceAndTypeSpecificEvents = async (req, res) => {
  const { place, type } = req.query;

  try {
    const result = await event.find({ place, type });

    if (result.length == 0) {
      return res.json({ msg: "No More Events" });
    }

    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

const searchEventName = async (req, res) => {
  const { title } = req.query;

  try {
    const result = await event.find({ title });

    if (result.length == 0) {
      return res.json({ msg: "No More Events" });
    }

    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

module.exports = {
  getAllEvents,
  getTypeSpecificEvents,
  getPlaceAndTypeSpecificEvents,
  searchEventName,
  getPlaceSpecificEvents,
};
