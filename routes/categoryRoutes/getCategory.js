const mongoose = require("mongoose");

const Category = mongoose.model("categories");

module.exports = (app) => {
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await Category.find({}, null, {
        sort: { categoryName: 1 },
      });

      res.status(200).send({ categories });
    } catch (error) {
      res.status(500).send({ error });
    }
  });
};
