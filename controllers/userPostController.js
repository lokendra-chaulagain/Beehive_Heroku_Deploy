const UserPost = require("../models/UserPost");

// Create
const createUserPost = async (req, res, next) => {
  const newUserPost = new UserPost(req.body);
  try {
    const savedUserPost = await newUserPost.save();
    res.status(200).json(savedUserPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update
const updateUserPost = async (req, res, next) => {
  try {
    const updatedUserPost = await UserPost.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUserPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get
const getUserPost = async (req, res, next) => {
  try {
    const post = await UserPost.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All
const getAllUserPosts = async (req, res, next) => {
  try {
    const posts = await UserPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete
const deleteUserPost = async (req, res, next) => {
  try {
    const deletedUserPost = await UserPost.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUserPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all userPosts of a user (by userID) element
const getAllPostsOfAUser = async (req, res, next) => {
  const { userID } = req.body;
  try {
    userKoAllPosts = await UserPost.find({ userID });
    res.status(200).json(userKoAllPosts);
  } catch (error) {
    next(error);
  }
};

//LIKE / DISLIKE A POST
const likeDislikePost = async (req, res, next) => {
  try {
    const post = await UserPost.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    next(err);
  }
};

//Get all id from likes array
const getAllLikesId = async (req, res, next) => {
  try {
    const post = await UserPost.findById(req.params.id);
    res.status(200).json(post.likes);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUserPost,
  updateUserPost,
  getUserPost,
  getAllUserPosts,
  deleteUserPost,
  getAllPostsOfAUser,
  likeDislikePost,
  getAllLikesId,
};
