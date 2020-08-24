const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = new Schema(
  {
    title: String,
  },
  { timestamps: true }
);

mongoose.model("tag", tagSchema);
