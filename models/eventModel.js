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
    type: String,
    required: true,
  },
  locationUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required:true
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
  coordinator:{
    type:Array({
      name:String,
      mob:String
    })
  }
});

module.exports = mongoose.model("event", eventSchema);
