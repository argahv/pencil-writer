const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin");
const authorUser = require("../../middlewares/authorUser");

const Post = mongoose.model("post");

module.exports = (app) => {
  app.delete(
    "/api/post/delete/:id",
    requireLogin,
    authorUser,
    async (req, res) => {
      const { id } = req.params;
      try {
        const singlePost = await Post.findByIdAndRemove({ _id: id });
        res.send({ message: "Post deleted" });
      } catch (error) {
        res.status(500).send({ error: "Something went wrong" });
      }
    }
  );
};
