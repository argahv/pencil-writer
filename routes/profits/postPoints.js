const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin");

const Post = mongoose.model("post");
const User = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/profit/:id/:type", requireLogin, async (req, res) => {
    const { type, id } = req.params;

    const post = await Post.findOne({ _id: id });

    const user = await User.findById({ _id: post.author._authorId });
    let updatedUser;

    const handlePoints = async (pointsValue) => {
      if (!post.points.users.includes(req.user.userId)) {
        await Post.findOneAndUpdate(
          { _id: id },
          {
            $push: {
              "points.users": req.user.userId,
            },
            $inc: { "points.count": pointsValue },
          },
          async (err, updated) => {
            if (!err) {
              let updatedData = await updated;
              return res.status(200).send(updatedData);
            }
          }
        );
        updatedUser = await User.findOneAndUpdate(
          { _id: post.author._authorId },
          {
            $inc: { points: pointsValue },
          }
        );
      }
    };
    const handleFire = async (pointsValue, fireValue) => {
      if (!post.fires.users.includes(req.user.userId)) {
        await Post.findOneAndUpdate(
          { _id: id },
          {
            $push: {
              "fires.users": req.user.userId,
            },
            $inc: {
              "points.count": pointsValue,
              "fires.count": fireValue,
            },
          },
          async (err, updated) => {
            if (!err) {
              let updatedData = await updated;
              return res.status(200).send(updatedData);
            }
          }
        );
        updatedUser = await User.findOneAndUpdate(
          { _id: post.author._authorId },
          {
            $inc: { points: pointsValue, fires: fireValue },
          }
        );
      }
    };
    try {
      switch (type) {
        case "points":
          handlePoints(1, 0);
          break;
        case "fires":
          handleFire(5, 1);
          break;
        default:
          return post;
      }
    } catch (error) {
      res.status(500).send({ error });
    }
  });
};
