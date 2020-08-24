const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: String,
    userName: String,
    userImage: {
      type: String,
      default: "",
    },
    points: {
      type: Number,
      default: 0,
    },
    fires: {
      type: Number,
      default: 0,
    },
    level: {
      type: String,
      default: "A Learner",
    },
    role: {
      type: String,
      default: "writer",
    },
    email: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

mongoose.model("users", userSchema);
