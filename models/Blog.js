const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    category: {
      type: Array,
      default: [],
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    authorName: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      default: "",
    },

    timeRead: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
