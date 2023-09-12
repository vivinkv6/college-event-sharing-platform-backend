const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  college: {
    type: Array({
      name: String,
      logo: String,
      place: String,
      location: String,
      hod: Object({
        hodName: String,
        hodMob: String,
      }),
      principal: {
        principalName: String,
        principalMob: String,
      },
    }),
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  history: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "events",
  },
});

module.exports = mongoose.model("coordinator", userSchema);
