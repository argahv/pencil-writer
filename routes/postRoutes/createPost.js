const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin");

const Post = mongoose.model("post");

module.exports = (app) => {
  //   app.post("/api/post/create", (req, res) => {
  app.post("/api/post/create", requireLogin, async (req, res) => {
    const { title, category, content, summary, image } = req.body;

    const post = await new Post({
      title,
      content,
      category,
      image,
      summary,
      image,
      score: {
        points: {
          count: 0,
          users: [],
        },
        fires: {
          count: 0,
          users: [],
        },
      },
      author: {
        _authorId: req.user.id,
        authorName: req.user.userName,
        profilePic: req.user.userImage,
      },
    }).save();
    res
      .status(200)
      .send({ data: post, message: "You just added happiness to others." });
  });
};
