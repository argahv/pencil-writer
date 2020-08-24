const mongoose = require("mongoose");

const Tags = mongoose.model("tag");

module.exports = (app) => {
  app.post("/api/tags/create", async (req, res) => {
    const { title } = req.body;
    try {
      if (title) {
        const tag = await new Tags({
          title,
        }).save();
        res.status(200).send({ message: "Tag Created", tag });
      }
    } catch (error) {
      res.status(500).send({ error });
    }
  });
};
