const eventComplaint = require("../models/complaintModel");

//complaint controller

const complaintController = async (req, res) => {
  const { sender, subject, message } = req.body;

  try {
    const result = await eventComplaint.create({ sender, subject, message });

    if (!result) {
      return res.json({ msg: "Complaint Submition Failed" });
    }
    res.json({ msg: "Complaint Submit Successfully" });
  } catch (error) {
    res.json({ err: error.message });
  }
};

module.exports=complaintController
