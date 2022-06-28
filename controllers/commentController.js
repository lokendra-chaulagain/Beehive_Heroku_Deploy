const PostComment = require("../models/PostComment");
const UserPost = require("../models/UserPost");

//Create comments
const createComment = async (req, res, next) => {
  const newComment = new PostComment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};

//Get comments by postID
const getCommentsByPostID = async (req, res, next) => {
  const { postID } = req.body;
  try {
    const comments = await PostComment.find({ postID });
    return (res = res.status(200).json(comments));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createComment,
  getCommentsByPostID,
};
