const mongoose = require("mongoose");

const schema = mongoose.Schema;

const eventSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  college: {
    type: Array({
      collegeName: String,
      collegeLogo: String,
      department: Array({
        name: String,
      }),
    }),
  },
  place: {
    type: Object({
      placeName: String,
      locationUrl: String,
    }),
    required: true,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  documents: {
    type: Array({
      source: String,
    }),
  },
  sponsors: {
    type: Array({
      sponsorName: String,
      sponsorLogo: String,
    }),
  },
});

module.exports = mongoose.model("event", eventSchema);