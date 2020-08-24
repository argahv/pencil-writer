const mongoose = require("mongoose");

const Post = mongoose.model("post");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ message: "You do not have the permission to delete it.", error });
  }
};
