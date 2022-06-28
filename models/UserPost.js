const mongoose = require("mongoose");

const UserPostSchema = new mongoose.Schema(
  {
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

    profession: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      default: "",
    },

    postImg: {
      type: String,
      default: null,
    },

    likes: {
      type: Array,
      default: [],
    },

    disLikes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserPost", UserPostSchema);
