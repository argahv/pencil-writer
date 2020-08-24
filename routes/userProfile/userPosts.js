const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin");

const Post = mongoose.model("post");

module.exports = (app) => {
  app.get("/api/user/:id/posts", requireLogin, async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.find({ "author._authorId": id }, null, {
        sort: { createdAt: -1 },
      });
      res.status(200).send({ userPost: post });
    } catch (error) {
      res.status(500).send({ error: "Something went wrong", error });
    }
  });
};
