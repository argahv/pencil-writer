const mongoose = require("mongoose");

const Post = mongoose.model("post");

module.exports = (app) => {
  app.get("/api/post/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const singlePost = await Post.findById({ _id: id });

      // const suggestQuery = {
      //   category: singlePost.category,
      //   $filter: { _id: !id },
      // };

      // const options = {
      //   page: 1,
      //   limit: 2,
      //   sort: { "points.count": -1 },
      // };
      // let suggestPost = {};
      // await Post.paginate(suggestQuery, options, async (error, result) => {
      //   console.log("suggestPost", suggestPost);
      // });
      res.status(200).send({ post: singlePost });
    } catch (error) {
      res.status(500).send({ error: "Something went wrong" });
    }
  });
};
