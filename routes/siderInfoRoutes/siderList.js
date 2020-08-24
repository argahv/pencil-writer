const mongoose = require("mongoose");
const Post = mongoose.model("post");

module.exports = (app) => {
  app.get("/api/side-content", async (req, res) => {
    const limitData = {
      limit: 4,
      sort: { "points.count": -1 },
      page: 1,
    };

    const { limit, sort, page } = limitData;

    const myCustomLabels = {
      totalDocs: "total",
      docs: "posts",
      limit: "limit",
      page: "page",
      nextPage: "next",
      prevPage: "prev",
      totalPages: "pageCount",
      pagingCounter: "slNo",
      meta: "paginator",
    };
    const options = {
      limit,
      page,
      sort,
      customLabels: myCustomLabels,
    };

    try {
      await Post.paginate({}, options, (err, result) => {
        let popularPostsData = result.posts;
        let categ = result.posts.map(({ category }) => category);
        let uniqueData = new Set(categ);
        let popularCategories = [...uniqueData];
        let popularPosts = [];
        if (popularPostsData.length > 0) {
          popularPosts = popularPostsData.map(
            ({ title, _id, createdAt, summary, author }) => ({
              authorAvatar: author.profilePic,
              title,
              _id,
              createdAt,
              summary,
            })
          );
        }

        res.status(200).send({
          popularPosts: popularPosts,
          popularCategories,
        });
      });
    } catch (error) {
      res.status(500).send({ error: "Something went wrong" });
    }
  });
};
