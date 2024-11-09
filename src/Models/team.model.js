const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    position: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    linkedin: {
      type: String,
      require: true,
    },
    github: {
      type: String,
      require: true,
    },
    level: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
