const mongoose = require("mongoose");

const schema = mongoose.Schema;

const notficationSchema = new schema({
  message: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  creator: {
    type: Object({
      name: String,
      event: String,
      college: String,
    }),
  },
});

module.exports = mongoose.model("notification", notficationSchema);
