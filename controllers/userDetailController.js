const UserDetail = require("../models/userDetail");
const JobPost = require("../models/JobPost");
const UserPost = require("../models/UserPost");

//Create
const createUserDetail = async (req, res, next) => {
  const userDetail = new UserDetail(req.body);
  try {
    const savedUserDetail = await userDetail.save();
    res.status(200).json(savedUserDetail);
  } catch (error) {
    next(error);
  }
};

//Update
const updateUserDetail = async (req, res, next) => {
  try {
    const updatedUser = await UserDetail.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

//Get
const getUserDetail = async (req, res, next) => {
  try {
    const userDetail = await UserDetail.findById(req.params.id);
    res.status(200).json(userDetail) + "UserDetail found";
  } catch (error) {
    next(error);
  }
};

//Get all
const getAllUserDetail = async (req, res, next) => {
  try {
    const allUserDetail = await UserDetail.find();
    res.status(200).json(allUserDetail);
  } catch (error) {
    next(error);
  }
};

//Delete
const deleteUserDetail = async (req, res, next) => {
  try {
    const deletedUserDetail = await UserDetail.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUserDetail);
  } catch (error) {
    next(error);
  }
};

//Find by element {userID}
const getUserDetailByUserID = async (req, res, next) => {
  const { userID } = req.body;
  try {
    const userDetail = await UserDetail.find({ userID });
    return (res = res.status(200).json(userDetail));
  } catch (error) {
    next(error);
  }
};

//Bookmark jobPost
const bookmark = async (req, res, next) => {
  try {
    const post = await JobPost.findById(req.params.postId);
    const userPost = await UserPost.findById(req.params.postId);
    const currentUserDetail = await UserDetail.findById(req.body.userDetailId);
    if (!currentUserDetail.jobPostsBookmark.includes(req.params.postId)) {
      await currentUserDetail.updateOne({
        $push: { jobPostsBookmark: req.params.postId },
      });
      res.status(200).json("JobPost/userPost has been bookmarked");
    } else {
      await currentUserDetail.updateOne({
        $pull: { jobPostsBookmark: req.params.postId },
      });
      res.status(200).json("JobPost/userPost has been unbookmarked");
    }
  } catch (error) {
    next(error);
  }
};

//GetAll bookmark jobPostId of a user
const getBookmarkJobPost = async (req, res, next) => {
  try {
    const userDetail = await UserDetail.findById(req.params.userDetailId);
    res.status(200).json(userDetail.jobPostsBookmark);
  } catch (error) {}
};


module.exports = {
  createUserDetail,
  updateUserDetail,
  getUserDetail,
  getAllUserDetail,
  deleteUserDetail,
  getUserDetailByUserID,
  bookmark,
  getBookmarkJobPost,
};
