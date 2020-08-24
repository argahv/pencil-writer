const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin");

const Post = mongoose.model("post");

module.exports = (app) => {
  app.get("/api/posts", async (req, res) => {
    const {
      page = 1,
      limit = 15,
      search = {
        searchField: [] || "",
        searchValue: [] || "",
      },
      sort = { createdAt: -1 },
    } = req.query;

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
      page,
      limit,
      sort,
      customLabels: myCustomLabels,
    };

    let queryObj = {};
    const { searchField, searchValue } = search;
    if (req.query.search && Array.isArray(req.query.search.searchField)) {
      queryObj.$or = searchField.map((searchData, index) => ({
        [searchData]: searchValue[index],
        isPublic: true,
      }));
    } else if (req.query.search && typeof searchField === "string") {
      queryObj[searchField] = searchValue;
    }

    try {
      await Post.paginate(queryObj, options, async (err, result) => {
        const finalPost = result;
        res.status(200).send({ data: finalPost });
      });
    } catch (error) {
      res.status(500).send({ error: "Something went wrong", error });
    }
  });
};
