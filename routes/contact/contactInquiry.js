const mongoose = require("mongoose");

const ContactInquiry = mongoose.model("contactInquiry");

module.exports = (app) => {
  app.post("/api/contact-inquiry", async (req, res) => {
    const { fullName, email, message } = req.body;

    try {
      await new ContactInquiry({
        fullName,
        email,
        message,
      }).save();
      res.status(200).send({ message: "We've got your message, Thank you!" });
    } catch (error) {
      res.status(422).send({ error });
    }
  });
};
