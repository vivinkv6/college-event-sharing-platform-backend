const event = require("../models/eventModel");

//Event register controller

const registerEventController = async (req, res) => {
  const {
    title,
    college,
    place,
    locationUrl,
    type,
    description,
    banner,
    start_date,
    end_date,
    documents,
    sponsors,
    coordinator
  } = req.body;

  try {
   
    const result = await event.create({
      title,
      banner,
      college,
      description,
      documents,
      end_date,
      place,
      locationUrl,
      sponsors,
      start_date,
      type,
      coordinator
    });

    if (!result) {
      return res.json({ err: "Event Registration Failed" });
    }

    res.json({ msg: "Event Successfully Registered" });
  } catch (error) {
    res.json({ err: error.message });
  }
};

module.exports = registerEventController;
