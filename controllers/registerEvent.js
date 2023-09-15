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
  } = req.body;

  try {
    if (
      title == " " ||
      college == " " ||
      place == " " ||
      locationUrl == " " ||
      type == " " ||
      description == " " ||
      banner == " " ||
      start_date == " " ||
      end_date == " " ||
      documents == " " ||
      sponsors == " "
    ) {
      return res.json({ err: "Please fill all the details" });
    }

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
