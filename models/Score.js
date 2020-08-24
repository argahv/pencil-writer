const mongoose = require("mongoose");
const { Schema } = mongoose;

const scoreSchema = new Schema({
  points: {
    users: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  fires: {
    users: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = scoreSchema;
mongoose.model("score", scoreSchema);
