const mongoose = require("mongoose");

const schema = mongoose.Schema;

const officerSchema = new schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("eventOfficer", officerSchema);
