const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin");

const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/user/:id/scores", requireLogin, async (req, res) => {
    const { id } = req.params;

    try {
      const scores = await User.findById({ _id: id });
      const { level, points, fires } = scores;
      res.status(200).send({ userScores: { points, fires, level } });
    } catch (error) {
      res.status(500).send({ error: "Something went wrong", error });
    }
  });
};
