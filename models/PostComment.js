const mongoose = require("mongoose");

const PostCommentSchema = new mongoose.Schema(
  {
    postID: {
      type: String,
      required: true,
    },

    userID: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },

    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", PostCommentSchema);
