const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactInquirySchema = new Schema(
  {
    fullName: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

mongoose.model("contactInquiry", contactInquirySchema);
