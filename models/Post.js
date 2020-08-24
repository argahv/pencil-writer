const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;
const TagSchema = require("./Tag");
const ScoreSchema = require("./Score");

const postSchema = new Schema(
  {
    title: String,
    category: String,
    summary: String,
    tags: [TagSchema],
    image: String,
    isPublic: {
      default: true,
      type: Boolean,
    },
    points: {
      count: {
        type: Number,
        default: 0,
      },
      users: [String],
    },
    fires: {
      count: {
        type: Number,
        default: 0,
      },
      users: [String],
    },
    content: String,

    views: {
      type: Number,
      default: 0,
    },
    author: {
      _authorId: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      authorName: {
        type: Schema.Types.String,
        ref: "users",
      },
      profilePic: {
        type: Schema.Types.String,
        ref: "users",
      },
    },
  },
  { timestamps: true }
);

postSchema.plugin(mongoosePaginate);

mongoose.model("post", postSchema);
