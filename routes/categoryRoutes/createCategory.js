const mongoose = require("mongoose");

const Category = mongoose.model("categories");

module.exports = (app) => {
  app.post("/api/category/create", async (req, res) => {
    const { categoryName } = req.body;
    try {
      if (categoryName) {
        const category = await new Category({
          categoryName,
        }).save();
        res.status(200).send({ message: "Category created", category });
      } else {
        res.status(204).send({ message: "Name must be entered" });
      }
    } catch (error) {
      res.status(500).send({ error: "An error occured", error });
    }
  });
};
