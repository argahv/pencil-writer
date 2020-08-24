const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoriesSchema = new Schema(
  {
    categoryName: String,
    id: Number,
  },
  { timestamps: true }
);

mongoose.model("categories", categoriesSchema);
