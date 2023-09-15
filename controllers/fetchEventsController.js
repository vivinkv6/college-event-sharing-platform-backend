const event = require("../models/eventModel");

//fetch specific category events
const catergoryEventController = async (req, res) => {
  const { category } = req.query;

  try {
    const result = await event.find({ type: category });

    if (result.length == 0) {
      return res.json({ msg: "No More Event" });
    }

    if (!result) {
      return res.json({ err: "Failed to fetch the result" });
    }
    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

//fetch place events

const locationEventController = async (req, res) => {
  const { place } = req.query;

  try {
    const result = await event.find({ place });

    if (result.length == 0) {
      return res.json({ msg: "No More Event" });
    }

    if (!result) {
      return res.json({ err: "Failed to fetch the result" });
    }
    res.json({ result });
  } catch (error) {
    res.json({ err: error.message });
  }
};

module.exports = { catergoryEventController, locationEventController };
